const account = {
    name: 'Cristian R',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount

        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount

        })
        
        accountBalance = totalIncome - totalExpenses
        
        return `${this.name} has ${totalExpenses} in expenses and ${totalIncome} in income.\n and an account balance of: ${accountBalance}`
    },

}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('bluehubs', 10000)
console.log(account.getAccountSummary())