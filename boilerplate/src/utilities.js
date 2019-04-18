// Named export
// Default export  - at most one

const add = (a, v) => a + v
const name = 'Cristian'

const square = (x) => x * x
console.log('from my code')
export { square as default, add, name }