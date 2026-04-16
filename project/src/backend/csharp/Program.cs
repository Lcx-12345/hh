// C# 示例文件
using System;

class Program {
    static string Greet(string name) {
        return $"Hello, {name}!";
    }
    
    static void Main() {
        Console.WriteLine("Hello from C#!");
        
        string message = Greet("World");
        Console.WriteLine(message);
    }
}
