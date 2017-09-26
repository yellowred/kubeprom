package main

import (
	"encoding/json"
	. "github.com/franela/goblin"
	"testing"
)

func TestKubernetes(t *testing.T) {
	g := Goblin(t)
	g.Describe("Kubernetes data", func() {
		g.It("Should get pod list ", func() {
			res := podList("kube-proj")
			var f interface{}
			json.Unmarshal(res, &f)
			podListResp := f.(map[string]interface{})
			g.Assert(string(podListResp["kind"].(string))).Equal("PodList")
		})

		g.It("Should get pod IP list ", func() {
			res := podIpList("kube-proj", "kube-proj")
			g.Assert(len(res)).Equal(2)
			g.Assert(res[0]).Equal("192.168.33.100")
		})

	})
}
