# Code Coverage Notes

Coverage was measured with Jest using the command:

npx jest --coverage

**Result:** 
Statements: 26.02%
Branches: 78.94%
Functions: 43.47%
Lines: 23.94%

**Comment:**
The current unit tests mainly cover the pure logic functions in app.js, such as:

validation of expenses
adding expenses
removing expenses
calculating totals
grouping by category
grouping by date

The lower total coverage is expected at this stage because most DOM/UI-related code is not yet covered by tests.

## Updated observation
Additional edge-case tests were added for:
- empty arrays
- missing title
- grouping edge cases

The overall coverage percentage did not increase noticeably, because the uncovered part of the file is mainly DOM/UI-related code in `app.js`. The current automated tests focus on pure logic functions, which are the most suitable part for unit testing in this project stage.