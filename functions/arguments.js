// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 6)
console.log(result)

// default arguments

let getScoreText = function (name ="Jan Doe", score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return "Name: " + name + " | " + "Score: " + score
}

let scoreText = getScoreText(undefined, 99.9)
console.log(scoreText)

// Challenge area

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let totalTip = total * tipPercent
    return `A ${percent}% tip on ${total} would be ${totalTip}`
}

let tip = getTip(250)
console.log(tip)

let name = `maya`
let age = 34
console.log(`Hey, my name is ${name} I am ${age} years old.`)

