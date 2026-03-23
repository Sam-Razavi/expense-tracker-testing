class ExpenseService {
    constructor(repository) {
        this.repository = repository;
    }

    isValidExpense(expense) {
        return (
            expense.title !== "" &&
            Number.isFinite(expense.amount) &&
            expense.amount > 0 &&
            expense.category !== "" &&
            expense.date !== ""
        );
    }

    createExpense(title, amount, category, date) {
        return {
            id: crypto.randomUUID(),
            title,
            amount,
            category,
            date,
        };
    }

    addExpense(expense) {
        if (!this.isValidExpense(expense)) {
            return false;
        }

        this.repository.add(expense);
        return true;
    }

    removeExpense(expenseId) {
        this.repository.remove(expenseId);
    }

    getAllExpenses() {
        return this.repository.getAll();
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = ExpenseService;
}

if (typeof window !== "undefined") {
    window.ExpenseService = ExpenseService;
}