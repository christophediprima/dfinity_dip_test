use ic_cdk_macros::*;

#[query(name = "greet")]
fn greet(input: String) -> String { 
    format!("Hello {}{}", input, "!")
}