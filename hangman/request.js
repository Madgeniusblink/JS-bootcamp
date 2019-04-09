// Making an HTTP request
const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

// START__________________________________________________
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
//     request.send()

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('An error has taken place')
//     }
// }
// END____________________________________________________

const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4  && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch DATA', undefined)
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}


