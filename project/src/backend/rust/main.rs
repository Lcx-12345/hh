// Rust 示例文件
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("Hello from Rust!");
    
    let message = greet("World");
    println!("{}", message);
}
