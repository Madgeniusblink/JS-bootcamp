const products = [{name: 'Computer mouse'}]
const product = products[0]

// Truthy - values that resolve to true in boolean context
// Truthy values - {}, [], true, 
// Falsy - values that resolve to false in boolean context
// Falsy values - false , 0, empty string, null, undefined, NaN


if (product) {
    console.log('product found')  // True
} else {
    console.log('Product not found')  // False
}