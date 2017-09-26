package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"regexp"
	"strings"
)

func authToken() string {
	// "/var/run/secrets/kubernetes.io/serviceaccount/token"
	tokenPath := env("KUBERNETES_AUTH_TOKEN", "./mock-k8s/token")
	fmt.Println("Token Path at: ", tokenPath)
	if _, err := os.Stat(tokenPath); os.IsNotExist(err) {
		errorf("Error reading Token file: %v\n", err)
	}

	data, err2 := ioutil.ReadFile(tokenPath)
	if err2 != nil {
		errorf("Error reading Token file: %v\n", err2)
	}

	fmt.Println("Token exists: ", string(data))

	// trim new line just to be sure
	return strings.Trim(string(data), "\n")
}

func podList(namespace string) []byte {
	defer func() {
		if rec := recover(); rec != nil {
			fmt.Printf("Query Pod List error (on defer): %v\n", rec)
			panic(rec)
		}
		fmt.Println("Done!")
	}()

	kubernetesServiceHost := env("KUBERNETES_SERVICE_HOST", "localhost")
	kubernetesPort := env("KUBERNETES_PORT_443_TCP_PORT", "3010")
	targetTag := env("TARGET_TAG", "kube-proj")

	protocol := "http"
	if kubernetesPort == "443" {
		protocol = "https"
	}
	url := fmt.Sprintf("%s://%s:%s/api/v1/namespaces/%s/pods?labelSelector=app%%3d%s", protocol, kubernetesServiceHost, kubernetesPort, namespace, targetTag)

	headers := make(map[string]string)
	headers["Authorization"] = fmt.Sprintf("Bearer %s", authToken())
	return httpRequest(url, headers)
}

func podIPFromPodJson(item interface{}) string {
	podIP := item.(map[string]interface{})["status"].(map[string]interface{})["podIP"].(string)
	return podIP
}

func podIpList(namespace string, targetTag string) []string {
	podList := podList(namespace)

	var f interface{}
	err := json.Unmarshal(podList, &f)
	if err != nil {
		errorf("JSON parse error: %v\n", err)
	}

	// When decoding into an interface{} variable, the JSON module represents
	// dictionaries as map[string]interface{} maps
	data := f.(map[string]interface{})

	// When decoding into an interface{} variable, the JSON module represents
	// arrays as []interface{} slices
	items := data["items"].([]interface{})

	var targets []string

	for i := 0; i < len(items); i++ {
		// fmt.Print(items[i])
		pod := items[i].(map[string]interface{})
		name := pod["metadata"].(map[string]interface{})["name"].(string)

		r1, _ := regexp.Compile(targetTag)
		r2, _ := regexp.Compile("(build|deploy)")

		if r1.MatchString(name) && !r2.MatchString(name) {
			ip := podIPFromPodJson(items[i])
			fmt.Printf("name: %s = %s\n", name, ip)
			targets = append(targets, ip)
		}
	}
	return targets
}
