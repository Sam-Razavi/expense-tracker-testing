class ExpenseRepository {
    constructor() {
        this.expenses = [];
    }

    getAll() {
        return this.expenses;
    }

    add(expense) {
        this.expenses.push(expense);
    }

    remove(expenseId) {
        this.expenses = this.expenses.filter((expense) => expense.id !== expenseId);
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = ExpenseRepository;
}

if (typeof window !== "undefined") {
    window.ExpenseRepository = ExpenseRepository;
}