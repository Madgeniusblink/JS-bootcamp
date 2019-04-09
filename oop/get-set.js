const data = {
    locations: [],
    get location() {
        return 'This is a test'
    },
    set location(value) {
        this._location = value.trim()
        this.location.push(this._location)
    }
}
// cod that uses the data object
data.location = 'Miami'
data.location = ' NEwYork   '
console.log(data)