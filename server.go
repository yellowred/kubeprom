package main

import (
	"fmt"
	"net/http"
	"sort"
	"strings"
	"time"
)

type podQueryError struct {
	index int
	podIp string
	code  string
}

func (e *podQueryError) Error() string {
	return fmt.Sprintf("[%d] IP: %s - On query HTTP Code %s", e.index, e.podIp, e.code)
}

func handleAllPodsQuery(w http.ResponseWriter, r *http.Request) {

	targets := podIpList(env("PROMETHEUS_NAMESPACE", "kube-proj"), env("TARGET_TAG", "kube-proj"))
	sort.Strings(targets)

	output := make(chan string)
	errors := make(chan podQueryError)
	defer close(output)

	for i, ip := range targets {
		// fmt.Printf("Querying: %s", ip)
		go func(podIP string, index int) {

			defer func() {
				if rec := recover(); rec != nil {
					fmt.Printf("PANIC RECOVERED: %s\n", rec)
					// Catching downstream errors and displaying body
					msg := fmt.Sprintf("{ \"error\" : \"%v\" }", rec)
					http.Error(w, msg, http.StatusServiceUnavailable)
					errors <- podQueryError{index, podIP, msg}
				}
			}()

			metricsData := podMetrics(podIP)
			output <- indexPodMetrics(index, string(metricsData))
		}(ip, i)
	}

	var results []string
Loop:
	for {
		select {
		case v, ok := <-output:
			results = append(results, v)
			fmt.Println("Results received:", len(results))
			if !ok || len(results) == len(targets) {
				break Loop
			}
		case err := <-errors:
			fmt.Println(err)
			break Loop
		case <-time.After(15 * time.Second):
			fmt.Println("Timedout")
			break Loop
		}
	}

	fmt.Fprintf(w, strings.Join(results[:], "\n"))
}

func panicRecover(f func(w http.ResponseWriter, r *http.Request)) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

		defer func() {
			if rec := recover(); rec != nil {
				fmt.Printf("PANIC RECOVERED:%s\n", rec)
				// Catching downstream errors and displaying body
				msg := fmt.Sprintf("{ \"error\" : \"%v\" }", rec)
				http.Error(w, msg, http.StatusServiceUnavailable)
			}
		}()

		fmt.Println("Recover ON")
		f(w, r)
	}
}

func startServer(port string) {
	namespace := env("prometheus_namespace", "kube-proj")
	path := fmt.Sprintf("/%s/all", namespace)
	http.HandleFunc(path, panicRecover(handleAllPodsQuery))

	fmt.Printf("Starting to listen on %s...\n", port)
	http.ListenAndServe(":"+port, nil)
}
