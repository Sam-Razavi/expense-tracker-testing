# Test Cases

## ExpenseService

### TC1 – Add valid expense
**Description:** Verify that a valid expense is added successfully.  
**Input:** Expense with valid id, title, amount, category, and date  
**Expected Result:** Expense is added and returned in the list  

---

### TC2 – Add invalid expense
**Description:** Verify that an invalid expense is not added.  
**Input:** Expense with empty title and negative amount  
**Expected Result:** Expense is not added, function returns false  

---

### TC3 – Remove expense
**Description:** Verify that an expense can be removed by id.  
**Input:** Two expenses, remove one by id  
**Expected Result:** Only the remaining expense exists  

---

### TC4 – Get all expenses
**Description:** Verify that all stored expenses are returned.  
**Input:** One added expense  
**Expected Result:** List contains the added expense  

---

### TC5 – Add expense using mock repository
**Description:** Verify that the service interacts correctly with a mocked repository.  
**Input:** Valid expense data and a mocked repository  
**Expected Result:** Repository add method is called and the expense is handled correctly  

---

## SummaryService

### TC6 – Calculate total
**Description:** Verify that total amount is calculated correctly.  
**Input:** Two expenses (45 and 30)  
**Expected Result:** Total = 75  

---

### TC7 – Group by category
**Description:** Verify grouping of expenses by category.  
**Input:** Multiple expenses in different categories  
**Expected Result:** Correct sum per category  

---

### TC8 – Group by date
**Description:** Verify grouping of expenses by date.  
**Input:** Multiple expenses on different dates  
**Expected Result:** Correct sum per date  

---

### TC9 – Total with empty data
**Description:** Verify total calculation with no expenses.  
**Input:** Empty list  
**Expected Result:** Total = 0  

---

### TC10 – Group by category (empty)
**Description:** Verify grouping by category with no expenses.  
**Input:** Empty list  
**Expected Result:** Empty object `{}`  

---

### TC11 – Group by date (empty)
**Description:** Verify grouping by date with no expenses.  
**Input:** Empty list  
**Expected Result:** Empty object `{}`  