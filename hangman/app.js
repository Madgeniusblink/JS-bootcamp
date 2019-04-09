// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const game1 = new Hangman('New Car', 4)


puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage



window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
})

getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry("MX", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${country}`)
    }
    console.log(country.numericCode)
})