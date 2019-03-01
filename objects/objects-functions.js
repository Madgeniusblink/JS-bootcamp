let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 345
}

let otherBook = {
    title: "A People History",
    author: "Howard Zinn",
    pageCount: 670
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.pageCountSummary)

// Challenge


let convertFahrenheit = function (fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        celsisu: (fahrenheit -32) * 5 / 9,
        kalvin: (fahrenheit + 459.67) * 5 / 9
        
    }
}

let temps = convertFahrenheit(60)
console.log(temps)