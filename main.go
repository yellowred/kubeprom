package main

// bash
// unset https_proxy
// export KUBE_TOKEN=$(</var/run/secrets/kubernetes.io/serviceaccount/token)
// curl -sSk -H "Authorization: Bearer $KUBE_TOKEN" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/api/v1/namespaces/api-factory-asia-qa/pods
// curl -sSk -H "Authorization: Bearer $KUBE_TOKEN" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/api/v1/namespaces/api-factory-asia-monitoring-dev/pods

func main() {
	startServer(env("PORT", "8080"))
}
