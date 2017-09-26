package main

import (
	"fmt"
	"strings"
)

func podMetrics(podIp string) []byte {
	protocol := "http"
	port := "8080"
	url := fmt.Sprintf("%s://%s:%s/metrics", protocol, podIp, port)

	fmt.Println("Query to prometheus:", url)
	return httpRequest(url, map[string]string{})
}

func indexPodMetrics(index int, metricsData string) string {
	labelsToProceed := [...]string{"loopback_http_requests_total", "http_request_latency_ms", "http_request_latency_ms_bucket", "http_request_latency_ms_sum", "http_request_latency_ms_count", "http_request_duration_ms", "http_request_duration_ms_bucket", "http_request_duration_ms_sum", "http_request_duration_ms_count", "process_cpu_user_seconds_total", "process_cpu_system_seconds_total", "process_cpu_seconds_total", "process_start_time_seconds", "process_resident_memory_bytes", "process_virtual_memory_bytes", "process_heap_bytes", "process_open_fds", "process_max_fds", "nodejs_eventloop_lag_seconds", "nodejs_active_handles_total", "nodejs_active_requests_total", "nodejs_heap_size_total_bytes", "nodejs_heap_size_used_bytes", "nodejs_external_memory_bytes", "nodejs_heap_space_size_total_bytes", "nodejs_heap_space_size_used_bytes", "nodejs_heap_space_size_used_bytes", "nodejs_heap_space_size_available_bytes", "nodejs_heap_space_size_available_bytes", "nodejs_version_info"}
	for _, labelToProceed := range labelsToProceed {
		newLabel := fmt.Sprintf(labelToProceed+"_%d", index)
		metricsData = strings.Replace(metricsData, labelToProceed, newLabel, -1)
	}
	return metricsData
}
