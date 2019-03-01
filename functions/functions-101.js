// Function - input(argument), code, output (return value)

let greetUser = function () {
    console.log("Welcome user!")
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)


// Challenge Area

// let kalvin = (fahrenheit + 459.67) * 5 / 9 



let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsisu = (fahrenheit - 32) * 5 / 9
    return celsisu
}


let tempNow = convertFahrenheitToCelsius(32)
let tempToNight = convertFahrenheitToCelsius(68)

console.log(tempNow)
console.log(tempToNight)