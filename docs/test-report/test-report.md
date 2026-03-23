# Test Report

## 1. Overview
This report summarizes the testing performed for the expense tracker application.

## 2. Performed Testing
The following unit-tested functions were tested with Jest:
- `isValidExpense`
- `addExpense`
- `removeExpense`
- `calculateTotal`
- `groupExpensesByCategory`
- `groupExpensesByDate`

Manual UI testing is planned / has started for:
- adding an expense through the form
- viewing the expense list
- viewing summaries by category
- viewing summaries by date

## 3. Test Results
At this stage, the automated unit tests passed successfully.

- Test Suites: 1 passed
- Tests: 8 passed
- Tests failed: 0

## 4. Code Coverage
Coverage was measured with Jest.

- Statements: 26.02%
- Branches: 78.94%
- Functions: 43.47%
- Lines: 23.94%

## 5. Observations
The current automated tests mainly cover the pure logic functions.  
Most uncovered code is related to DOM/UI handling in `app.js`.

## 6. Conclusion
The tested logic functions behave as expected based on the current unit tests.  
Further testing can be added later for UI behavior and additional edge cases.