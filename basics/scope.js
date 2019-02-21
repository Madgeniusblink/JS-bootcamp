// Lexical Scope (static Scope)
// Global Scope - defined outside of all code block
// local Scope - Defined inside a code block


let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)
}