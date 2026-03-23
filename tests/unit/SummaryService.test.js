const ExpenseRepository = require("../../src/js/ExpenseRepository");
const SummaryService = require("../../src/js/SummaryService");

test("should calculate total amount of all expenses", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    repository.add({
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    });

    repository.add({
        id: "2",
        title: "Bus",
        amount: 30,
        category: "Transport",
        date: "2026-03-21",
    });

    const result = summaryService.calculateTotal();

    expect(result).toBe(75);
});

test("should group expenses by category", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    repository.add({
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    });

    repository.add({
        id: "2",
        title: "Lunch",
        amount: 80,
        category: "Food",
        date: "2026-03-20",
    });

    repository.add({
        id: "3",
        title: "Bus",
        amount: 30,
        category: "Transport",
        date: "2026-03-21",
    });

    const result = summaryService.groupByCategory();

    expect(result).toEqual({
        Food: 125,
        Transport: 30,
    });
});

test("should group expenses by date", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    repository.add({
        id: "1",
        title: "Coffee",
        amount: 45,
        category: "Food",
        date: "2026-03-20",
    });

    repository.add({
        id: "2",
        title: "Lunch",
        amount: 80,
        category: "Food",
        date: "2026-03-20",
    });

    repository.add({
        id: "3",
        title: "Bus",
        amount: 30,
        category: "Transport",
        date: "2026-03-21",
    });

    const result = summaryService.groupByDate();

    expect(result).toEqual({
        "2026-03-20": 125,
        "2026-03-21": 30,
    });
});

test("should return 0 when there are no expenses", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    const result = summaryService.calculateTotal();

    expect(result).toBe(0);
});

test("should return empty object when grouping by category with no expenses", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    const result = summaryService.groupByCategory();

    expect(result).toEqual({});
});

test("should return empty object when grouping by date with no expenses", () => {
    const repository = new ExpenseRepository();
    const summaryService = new SummaryService(repository);

    const result = summaryService.groupByDate();

    expect(result).toEqual({});
});