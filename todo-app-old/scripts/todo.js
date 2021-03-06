'use strict'

let todos = getSavedTodos()


// Filter Object
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// listen for input event
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const title = e.target.elements.text.value.trim()
    e.preventDefault()

    if (title.length > 0) {
        todos.push({
            id: uuidv4(),
            title: title,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''

    }
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
