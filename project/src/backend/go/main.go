// Go 示例文件
package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    fmt.Println("Hello from Go!")
    
    message := greet("World")
    fmt.Println(message)
}
