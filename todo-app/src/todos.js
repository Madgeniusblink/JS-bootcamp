import uuidv4 from 'uuid/v4'

let todos = []

// Fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        todos = []
    }
}
// End

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Expose notes from module
const getTodos = () => todos

const createTodo = (title) => {
    todos.push({
        id: uuidv4(),
        title,
        completed: false
    })
    saveTodos()

}

// remove Todo by ID
const removeTodo = (id) => {
    // find index
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    // remove index
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// complete todo from False to True
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}
// End


loadTodos()


export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }