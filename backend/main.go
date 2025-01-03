package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	// Create a new Echo instance
	e := echo.New()

	// Define a simple handler
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, Echo!")
	})

	// Start the server
	e.Logger.Fatal(e.Start(":8080"))
}
