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

test("should not add an invalid expense", () => {
    const repository = new ExpenseRepository();
    const service = new ExpenseService(repository);

    const invalidExpense = {
        id: "1",
        title: "",
        amount: -10,
        category: "Food",
        date: "2026-03-20",
    };

    const result = service.addExpense(invalidExpense);

    expect(result).toBe(false);
    expect(service.getAllExpenses()).toHaveLength(0);
});

test("should remove an expense by id through ExpenseService", () => {
    const repository = new ExpenseRepository();
    const service = new ExpenseService(repository);

    const expense1 = {
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    const expense2 = {
        id: "2",
        title: "Bus",
        amount: 30,
        category: "Transport",
        date: "2026-03-21",
    };

    service.addExpense(expense1);
    service.addExpense(expense2);

    service.removeExpense("1");

    const result = service.getAllExpenses();

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
});

test("should return all expenses", () => {
    const repository = new ExpenseRepository();
    const service = new ExpenseService(repository);

    const expense = {
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    service.addExpense(expense);

    const result = service.getAllExpenses();

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(expense);
});

test("should call repository.add when adding a valid expense", () => {
    const mockRepository = {
        add: jest.fn(),
        remove: jest.fn(),
        getAll: jest.fn(() => []),
    };

    const service = new ExpenseService(mockRepository);

    const expense = {
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    };

    const result = service.addExpense(expense);

    expect(result).toBe(true);
    expect(mockRepository.add).toHaveBeenCalledTimes(1);
    expect(mockRepository.add).toHaveBeenCalledWith(expense);
});