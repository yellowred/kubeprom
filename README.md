# Kubeprom: HTTP Proxy to kubernetes pods metrics for Prometheus

The aim of this proxy is to serve as a target for a Prometheus server and provide usual metrics with individual indexes attached to every label refereing to specific pods in kubernetes deployments. As a result it is possible to visualize memory consumption, CPU utilization, latency, etc. for each pod avoiding passing through load balancer.

## How to start

1. Deploy to OpenShift or Google Cloud.
2. Setp ENV vars:
    - KUBERNETES_SERVICE_HOST
    - KUBERNETES_PORT_443_TCP_PORT
    - TARGET_TAG
    - PROMETHEUS_NAMESPACE
3. Setup Prometheus to use it as a target.

## Testing

1. Run mock server `cd mock-k8s && npm run build && npm start && cd ..`.
2. Run tests `go test`.
3. Run the server locally `go run main.go utils.go server.go kubernetes.go prometheus.go`.
4. Try it out `curl -v http://localhost:8080/kube-proj/all`.
