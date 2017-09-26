package main

import (
	"crypto/tls"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"time"
)

func env(key, fallback string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return fallback
	}
	return value
}

func httpRequest(url string, headers map[string]string) []byte {
	timeout, err := strconv.ParseInt(env("HTTP_TIMEOUT", "5"), 10, 64)
	timeoutSeconds := time.Duration(timeout) * time.Second

	// Disable TLS verify for internal self signed certificates
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}

	client := &http.Client{
		Transport: tr,
		Timeout:   timeoutSeconds,
	}

	req, e := http.NewRequest("GET", url, nil)
	if e != nil {
		errorf("Error setting new request %v\n", e)
	}

	for headerName, headerValue := range headers {
		req.Header.Add(headerName, headerValue)
	}

	res, err := client.Do(req)
	if err != nil {
		fmt.Printf("Query Pod Metrics error: %v\n", err)
		panic(err)
	}

	defer res.Body.Close()

	body, err2 := ioutil.ReadAll(res.Body)
	if err2 != nil {
		fmt.Printf("Query Pod Metrics error: %v\n", err2)
		panic(err2)
	}

	// Print body if not success
	if res.StatusCode != 200 {
		fmt.Printf("Response Error: %v\nBody: \n%v\n", res.Status, string(body))
	}

	return body
}

func errorf(format string, args ...interface{}) {
	fmt.Fprintf(os.Stderr, format, args...)
	os.Exit(1)
}
