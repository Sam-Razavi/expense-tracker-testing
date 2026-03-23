# Test Cases

## TC1 – Validate correct expense input
**Related user story:** US1  
**Purpose:** Verify that a valid expense is accepted.  

**Test data:**  
- Title: Coffee  
- Amount: 45  
- Category: Food  
- Date: 2026-03-20  

**Expected result:**  
- `isValidExpense()` returns `true`  
- the expense can be added to the array  

---

## TC2 – Reject invalid amount
**Related user story:** US5  
**Purpose:** Verify that an expense with invalid amount is rejected.  

**Test data:**  
- Title: Coffee  
- Amount: 0  
- Category: Food  
- Date: 2026-03-20  

**Expected result:**  
- `isValidExpense()` returns `false`  
- the expense is not added to the array  

---

## TC3 – Remove expense by id
**Related user story:** US2  
**Purpose:** Verify that an expense can be removed correctly.  

**Test data:**  
- Expense array with two expenses  
- Remove id: 1  

**Expected result:**  
- the returned array contains only the remaining expense  
- the removed expense is no longer present  

---

## TC4 – Calculate total amount
**Related user story:** US2  
**Purpose:** Verify that the total amount is calculated correctly.  

**Test data:**  
- Expense 1: 45  
- Expense 2: 30  

**Expected result:**  
- total = 75  

---

## TC5 – Group expenses by category
**Related user story:** US3  
**Purpose:** Verify that expenses are grouped and summed by category.  

**Test data:**  
- Food: 45  
- Food: 80  
- Transport: 30  

**Expected result:**  
- Food = 125  
- Transport = 30  

---

## TC6 – Group expenses by date
**Related user story:** US4  
**Purpose:** Verify that expenses are grouped and summed by date.  

**Test data:**  
- 2026-03-20: 45  
- 2026-03-20: 80  
- 2026-03-21: 30  

**Expected result:**  
- 2026-03-20 = 125  
- 2026-03-21 = 30  