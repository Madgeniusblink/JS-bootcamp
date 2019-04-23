import { getFilters } from './filters'
import { removeTodo, toggleTodo, getTodos } from './todos'

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const { searchText, hideCompleted} = getFilters()
    const filterTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })
    const incomepleteTodos = getFilters((todo) => !todo.completed)

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
        renderTodos()
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
        renderTodos()
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

export { generateSummaryDOM, renderTodos, generateTodoDOM }