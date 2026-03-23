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

test("should remove an expense by id", () => {
    const expenses = [
        {
            id: "1",
            title: "Coffee",
            amount: 45,
            category: "Food",
            date: "2026-03-20",
        },
        {
            id: "2",
            title: "Bus",
            amount: 30,
            category: "Transport",
            date: "2026-03-20",
        },
    ];

    const result = removeExpense(expenses, "1");

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
});

test("should calculate the total amount of all expenses", () => {
    const expenses = [
        {
            id: "1",
            title: "Coffee",
            amount: 45,
            category: "Food",
            date: "2026-03-20",
        },
        {
            id: "2",
            title: "Bus",
            amount: 30,
            category: "Transport",
            date: "2026-03-20",
        },
    ];

    const result = calculateTotal(expenses);

    expect(result).toBe(75);
});