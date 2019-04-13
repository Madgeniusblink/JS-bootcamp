'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}
// End

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove Todo by ID
const removeTodo = (id) => {
    // find index
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    // remove index
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// complete todo from False to True
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}
// End

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filterTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incomepleteTodos = filterTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incomepleteTodos))
    
    if (filterTodos.length > 0) {
        filterTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No todos to show'
        todoEl.appendChild(emptyMessage)
    }

}
// End

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // setup the todo text
    todoText.textContent = todo.title
    containerEl.appendChild(todoText)

    // setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // setup button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    return todoEl
}
// End

// Get the DOM elements for list summary
const generateSummaryDOM = (incomepleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incomepleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incomepleteTodos.length} todo${plural} left for today.`
    return summary
}