// C++ 示例文件
#include <iostream>
#include <string>

std::string greet(const std::string& name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << "Hello from C++!" << std::endl;
    
    std::string message = greet("World");
    std::cout << message << std::endl;
    
    return 0;
}
