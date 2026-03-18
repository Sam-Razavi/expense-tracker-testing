const input = document.getElementById("expenseInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("expenseList");

let expenses = [];

function getExpenseInput() {
    return input.value.trim();
}

function addExpense(expensesArray, value) {
    if (!value) {
        return expensesArray;
    }

    return [...expensesArray, value];
}

function renderExpenses(listElement, expensesArray) {
    listElement.innerHTML = "";

    expensesArray.forEach((expense) => {
        const li = document.createElement("li");
        li.textContent = expense;
        listElement.appendChild(li);
    });
}

function clearExpenseInput() {
    input.value = "";
}

function handleAddExpense() {
    const value = getExpenseInput();

    if (!value) {
        return;
    }

    expenses = addExpense(expenses, value);
    renderExpenses(list, expenses);
    clearExpenseInput();
}

button.addEventListener("click", handleAddExpense);