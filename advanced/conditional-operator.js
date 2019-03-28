// Conditional (Ternary) Operator

// //        Condition  ?  if condition passes : if condition fails
// // message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// // if (myage >= 18) {
// //     message = 'You can vote!'
// // } else {
// //     message = 'You cannot vote'
// // }

// EXAMPLE ONE:
// const myAge = 26
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)


// EXAMPLE TWO:
// const myAge = 20
// const showPage = () => {
//     return 'Showing the page'
// }
// const showErrorPage = () => {
//     return 'Showing the error page'
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Tyler', 'Porter', 'maya', 'maya', 'maya']
const toMany = () => {
    return 'Too many people on your team'
}

const notToMany = () => {
    return `Team size: ${team.length}`
}

const message = team.length <= 4 ? notToMany() : toMany()
console.log(message)
// Or
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')