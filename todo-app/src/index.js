import { setFilters, getFilters } from './filters'
import { loadTodos, createTodo } from './todos'
import { renderTodos } from './views'


renderTodos()

// listen for input event
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const title = e.target.elements.text.value.trim()
    e.preventDefault()

    if (title.length > 0){
        createTodo(title)
        renderTodos()
        e.target.elements.text.value = ''
    }
 
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    getFilters({
        searchText: e.target.checked
    })
    renderTodos()
})

// syncing notes page with home storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})