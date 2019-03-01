let cristianAccount = {
    name: 'Cristian R',
    expenses: 0,
    income: 0,
}


let addExpense = function (userAccount, amount) {
    userAccount.expenses = userAccount.expenses + amount
}

// addIncome
let addIncome = function (userAccount, income) {
    userAccount.income = userAccount.income + income
}

// resetAccount

let resetAccount = function (userAccount) {
    userAccount.expenses = 0
    userAccount.income = 0
}

// getAccountSummery

let getAccountSummery = function (userAccount) {
    let balance = userAccount.income - userAccount.expenses
    return `Account Summery: ${userAccount.name} has a balance of: ${balance}. ${userAccount.income} in income. ${userAccount.expenses} in expenses.`
}


addIncome(cristianAccount, 150000000)
addExpense(cristianAccount, 4500)
addExpense(cristianAccount, 560)

console.log(getAccountSummery(cristianAccount))
resetAccount(cristianAccount)
console.log(getAccountSummery(cristianAccount))


