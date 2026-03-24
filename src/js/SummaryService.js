class SummaryService {
    constructor(repository) {
        this.repository = repository;
    }

    calculateTotal() {
        return this.repository
            .getAll()
            .reduce((total, expense) => total + expense.amount, 0);
    }

    groupByCategory() {
        return this.repository.getAll().reduce((groups, expense) => {
            const currentTotal = groups[expense.category] || 0;
            groups[expense.category] = currentTotal + expense.amount;
            return groups;
        }, {});
    }

    groupByDate() {
        return this.repository.getAll().reduce((groups, expense) => {
            const currentTotal = groups[expense.date] || 0;
            groups[expense.date] = currentTotal + expense.amount;
            return groups;
        }, {});
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = SummaryService;
}

if (typeof window !== "undefined") {
    window.SummaryService = SummaryService;
}