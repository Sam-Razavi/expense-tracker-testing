class Expense {
    constructor(id, title, amount, category, date) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = Expense;
}

if (typeof window !== "undefined") {
    window.Expense = Expense;
}