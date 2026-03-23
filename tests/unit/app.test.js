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

test("should add a valid expense to the array", () => {
    const expenses = [];

    const expense = {
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    const result = addExpense(expenses, expense);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(expense);
});

test("should not add an invalid expense to the array", () => {
    const expenses = [];

    const invalidExpense = {
        id: "2",
        title: "Coffee",
        amount: 0,
        category: "Food",
        date: "2026-03-20",
    };

    const result = addExpense(expenses, invalidExpense);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
});