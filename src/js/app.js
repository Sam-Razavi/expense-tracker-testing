if (typeof document !== "undefined") {
    const titleInput = document.getElementById("expenseTitle");
    const amountInput = document.getElementById("expenseAmount");
    const categoryInput = document.getElementById("expenseCategory");
    const dateInput = document.getElementById("expenseDate");
    const addButton = document.getElementById("addBtn");

    const expenseList = document.getElementById("expenseList");
    const totalAmountElement = document.getElementById("totalAmount");
    const categorySummaryElement = document.getElementById("categorySummary");
    const dateSummaryElement = document.getElementById("dateSummary");

    const repository = new ExpenseRepository();
    const expenseService = new ExpenseService(repository);
    const summaryService = new SummaryService(repository);

    function getExpenseFormValues() {
        return {
            title: titleInput.value.trim(),
            amount: Number(amountInput.value),
            category: categoryInput.value,
            date: dateInput.value,
        };
    }

    function renderExpenses(listElement, expensesArray) {
        listElement.innerHTML = "";

        expensesArray.forEach((expense) => {
            const li = document.createElement("li");

            const text = document.createElement("span");
            text.textContent = `${expense.title} - ${expense.amount} kr - ${expense.category} - ${expense.date}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", () => {
                expenseService.removeExpense(expense.id);
                renderAll();
            });

            li.appendChild(text);
            li.appendChild(deleteButton);
            listElement.appendChild(li);
        });
    }

    function renderCategorySummary(listElement, groupedExpenses) {
        listElement.innerHTML = "";

        Object.entries(groupedExpenses).forEach(([category, total]) => {
            const li = document.createElement("li");
            li.textContent = `${category}: ${total.toFixed(2)} kr`;
            listElement.appendChild(li);
        });
    }

    function renderDateSummary(listElement, groupedExpenses) {
        listElement.innerHTML = "";

        Object.entries(groupedExpenses).forEach(([date, total]) => {
            const li = document.createElement("li");
            li.textContent = `${date}: ${total.toFixed(2)} kr`;
            listElement.appendChild(li);
        });
    }

    function renderTotal(element, total) {
        element.textContent = `Total: ${total.toFixed(2)} kr`;
    }

    function renderAll() {
        const expenses = expenseService.getAllExpenses();
        renderExpenses(expenseList, expenses);
        renderTotal(totalAmountElement, summaryService.calculateTotal());
        renderCategorySummary(categorySummaryElement, summaryService.groupByCategory());
        renderDateSummary(dateSummaryElement, summaryService.groupByDate());
    }

    function clearExpenseForm() {
        titleInput.value = "";
        amountInput.value = "";
        categoryInput.value = "";
        dateInput.value = "";
    }

    function handleAddExpense() {
        const values = getExpenseFormValues();

        const newExpense = expenseService.createExpense(
            values.title,
            values.amount,
            values.category,
            values.date
        );

        const success = expenseService.addExpense(newExpense);

        if (!success) {
            alert("Please fill in all fields correctly.");
            return;
        }

        renderAll();
        clearExpenseForm();
    }

    addButton.addEventListener("click", handleAddExpense);
}