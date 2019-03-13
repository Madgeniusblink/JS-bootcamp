const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spains'
}, {
    title: 'Python Mastery Book',
    body: 'learn to use python to program everything'

}, {
    title: 'Web development With JavaScript',
    body: 'learn to use javascript to handle any input of information easier'
}]


// Filter Object
const filters = {
    searchText: ''
}

// Start
const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
// End

renderNotes(notes, filters)

// listen for click event
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
    console.log(e)
})


// listen for input event
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
