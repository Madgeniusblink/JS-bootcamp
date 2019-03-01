let name = '  Cristian Romero '

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// INclude methods
let password = 'abchellopassvfdgwords'
console.log(password.includes('password'))

// Trim
console.log(name.trim())


// Challenge area

// isValidPassword

// turn true if length is more than 8 - and 
// if doesn't contain the word password return false

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

let isValidPasswords = function (password) {
    return password.length > 8 && !password.includes('password') 
}

console.log('\n')
console.log('The The way')
console.log(isValidPassword('aweawf'))
console.log(isValidPassword('abc123!supername'))
console.log(isValidPassword('abc123password!@#$#@'))
console.log('\n')
console.log('The simplier way')
console.log(isValidPasswords('aweawf'))
console.log(isValidPasswords('abc123!supername'))
console.log(isValidPasswords('abc123password!@#$#@'))