const {
    isValidExpense,
    addExpense,
    removeExpense,
    calculateTotal,
    groupExpensesByCategory,
    groupExpensesByDate,
} = require("../../src/js/app");

test("should return true for a valid expense", () => {
    const expense = {
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    expect(isValidExpense(expense)).toBe(true);
});

test("should return false for an expense with invalid amount", () => {
    const expense = {
        title: "Coffee",
        amount: 0,
        category: "Food",
        date: "2026-03-20",
    };

    expect(isValidExpense(expense)).toBe(false);
});