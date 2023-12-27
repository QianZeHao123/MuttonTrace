package main

import (
	"mutton/routers"
)

func main() {
	//r := gin.Default()
	r := routers.SetupRouter()
	// set router
	//r.GET("/ping", handlers.PingHandler)

	// run server
	err := r.Run()
	if err != nil {
		return
	}
}
