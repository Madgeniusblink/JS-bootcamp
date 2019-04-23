import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes()

// listen for click event
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = createNote()
    location.assign(`/edit.html#${id}`)
    
})

// listen for input event
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

// syncing notes page with home storage
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})


