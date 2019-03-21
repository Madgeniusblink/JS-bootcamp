let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)


// listen for click event
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit-note.html#${id}`)
    
})

// listen for input event
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// syncing notes page with home storage
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

// const birthday = moment()
// birthday.month(0).date(11).year(1995)

// console.log(birthday.format('MMM Do, YYYY'))

