# Manual Test Cases (UI)

## MT1 – Add a new expense via UI
**Purpose:** Verify that a user can add an expense through the interface.

**Steps:**
1. Open the application in the browser
2. Enter title, amount, category, and date
3. Click "Add"

**Expected result:**
- The expense appears in the list
- The total amount updates correctly

---

## MT2 – Prevent invalid input
**Purpose:** Verify that invalid expenses are not accepted.

**Steps:**
1. Enter amount = 0 or leave a required field empty
2. Click "Add"

**Expected result:**
- The expense is not added
- An error message or no action occurs

---

## MT3 – Remove an expense
**Purpose:** Verify that a user can delete an expense.

**Steps:**
1. Add at least one expense
2. Click "Remove" on an item

**Expected result:**
- The expense disappears from the list
- The total updates correctly

---

## MT4 – View summary by category
**Purpose:** Verify category summary.

**Steps:**
1. Add multiple expenses in different categories

**Expected result:**
- Categories are grouped correctly
- Totals per category are correct

---

## MT5 – View summary by date
**Purpose:** Verify date summary.

**Steps:**
1. Add expenses with different dates

**Expected result:**
- Expenses are grouped by date
- Totals per date are correct