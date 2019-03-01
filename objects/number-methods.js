let num = 103.941

console.log(num.toFixed(1))

Math.round(num)
console.log('round', Math.round(num))
console.log('floor', Math.floor(num))
console.log('ceil', Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge area
// 1-5  true if correct | false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}
console.log(makeGuess(1))