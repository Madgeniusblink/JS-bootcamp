const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}


console.log(square(5))

const people = [{
    name: 'cristian',
    age: 24
}, {
    name: 'maya',
    age: 22
}, {
    name: 'werner',
    age: 28
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// Challenge

const age22 = people.find((person) => person.age === 22)

console.log(age22)