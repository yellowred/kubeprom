package main

import (
	. "github.com/franela/goblin"
	"testing"
)

func TestPrometheus(t *testing.T) {
	g := Goblin(t)
	g.Describe("Prometheus data", func() {
		// Passing Test
		g.It("Should update labels to multi pod env ", func() {
			g.Assert(indexPodMetrics(1, "loopback_http_requests_total")).Equal("loopback_http_requests_total_1")
		})
	})
}
