// //  for the end of the list
// console.log(notes.pop())
// notes.push('new notes')

// // for the start of the list
// console.log(notes.shift())
// notes.unshift('My first note')

// remove an item + add an item
// notes.splice(1, 1, 'new item in the list from splice')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

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

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }



const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    // return filteredNotes
}

// console.log(findNotes(notes, 'learn'))


// const note = findNote(notes, 'python mastery book')
// console.log(note)

sortNotes(notes)
console.log(notes)

