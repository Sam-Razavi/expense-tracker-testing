const ExpenseRepository = require("../../src/js/ExpenseRepository");
const ExpenseService = require("../../src/js/ExpenseService");

test("should add a valid expense through ExpenseService", () => {
    const repository = new ExpenseRepository();
    const service = new ExpenseService(repository);

    const expense = {
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    const result = service.addExpense(expense);

    expect(result).toBe(true);
    expect(service.getAllExpenses()).toHaveLength(1);
    expect(service.getAllExpenses()[0]).toEqual(expense);
});