const input = document.getElementById("expenseInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("expenseList");

button.addEventListener("click", () => {
    const value = input.value;

    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);

    input.value = "";
});