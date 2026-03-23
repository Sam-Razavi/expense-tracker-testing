function isValidExpense(expense) {
    return (
        expense.title !== "" &&
        Number.isFinite(expense.amount) &&
        expense.amount > 0 &&
        expense.category !== "" &&
        expense.date !== ""
    );
}

function createExpense(title, amount, category, date) {
    return {
        id: crypto.randomUUID(),
        title,
        amount,
        category,
        date,
    };
}

function addExpense(expensesArray, expense) {
    if (!isValidExpense(expense)) {
        return expensesArray;
    }

    return [...expensesArray, expense];
}

function removeExpense(expensesArray, expenseId) {
    return expensesArray.filter((expense) => expense.id !== expenseId);
}

function calculateTotal(expensesArray) {
    return expensesArray.reduce((total, expense) => total + expense.amount, 0);
}

function groupExpensesByCategory(expensesArray) {
    return expensesArray.reduce((groups, expense) => {
        const currentTotal = groups[expense.category] || 0;
        groups[expense.category] = currentTotal + expense.amount;
        return groups;
    }, {});
}

function groupExpensesByDate(expensesArray) {
    return expensesArray.reduce((groups, expense) => {
        const currentTotal = groups[expense.date] || 0;
        groups[expense.date] = currentTotal + expense.amount;
        return groups;
    }, {});
}

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

    let expenses = [];

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
                expenses = removeExpense(expenses, expense.id);
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
        renderExpenses(expenseList, expenses);
        renderTotal(totalAmountElement, calculateTotal(expenses));
        renderCategorySummary(categorySummaryElement, groupExpensesByCategory(expenses));
        renderDateSummary(dateSummaryElement, groupExpensesByDate(expenses));
    }

    function clearExpenseForm() {
        titleInput.value = "";
        amountInput.value = "";
        categoryInput.value = "";
        dateInput.value = "";
    }

    function handleAddExpense() {
        const values = getExpenseFormValues();
        const newExpense = createExpense(
            values.title,
            values.amount,
            values.category,
            values.date
        );

        const updatedExpenses = addExpense(expenses, newExpense);

        if (updatedExpenses === expenses) {
            alert("Please fill in all fields correctly.");
            return;
        }

        expenses = updatedExpenses;
        renderAll();
        clearExpenseForm();
    }

    addButton.addEventListener("click", handleAddExpense);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        isValidExpense,
        createExpense,
        addExpense,
        removeExpense,
        calculateTotal,
        groupExpensesByCategory,
        groupExpensesByDate,
    };
}