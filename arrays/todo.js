// Notes and examples
// todo.splice(2, 1)
// todo.push('New item to the end')
// todo.shift()

// console.log(`You have ${todo.length} todos on your list`)

// todo.forEach(function (todo, index) {
//     console.log(`${index + 1}. ${todo}`)
// })

// console.log("Challenge ----------\n")
// for (let count = 0; count < todo.length; count++) {
//     console.log(`${count + 1}. ${todo[count]}`)
// }

const todos = [{
    title: 'workout',
    body: '2PM workout today',
    completed: true
}, {
    title:'learn js',
    body: 'use Andrew mead JS course to learn JS',
    completed: false
}, {
    title: 'learn python',
    body: 'use teamtreehouse to learn python',
    completed: true
}, {
    title: 'work',
    body: 'leave to work at 5PM',
    completed: false
}, {
    title: 'find new clients',
    body: 'create a crawler to find leads in python',
    completed: false
}]

// console.log(`You have ${todos.length} todos on your list`)

// console.log('Before code runs -------------\n')


const deleteTodo = function (todos, todoTitle) {
    const index = todos.findIndex(function (todo) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// get a list of the todos that have a false todo

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true) {
            return 1
        } else {
            return 0
        }
    })

}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'find new clients')
// console.log(todos)

// console.log(`You have ${todos.length} todos on your list`)

