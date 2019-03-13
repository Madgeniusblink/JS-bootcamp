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


// Filter Object
const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const filterTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incomepleteTodos = filterTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incomepleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(summary)
    
    filterTodos.forEach(function (todo) {
        const p = document.createElement('listing')
        p.textContent = todo.title
        document.querySelector('#todos').appendChild(p)
    })
}
// End of FilterObjects

renderTodos(todos, filters)

// listen for input event
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})