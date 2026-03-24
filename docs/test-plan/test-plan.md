# Test Plan

## 1. Introduction
The purpose of this test plan is to describe how the expense tracker application will be tested. The focus is on ensuring that core functionalities work correctly and meet the defined user stories.

## 2. Scope
The following features will be tested:
- Adding expenses
- Removing expenses
- Validating input data
- Calculating total expenses
- Grouping expenses by category
- Grouping expenses by date

## 3. Test Strategy
Testing will be performed using:
- Unit testing with Jest
- Manual testing of the user interface

Unit tests focus on the core business logic in the class-based solution, mainly `ExpenseService` and `SummaryService`, while manual testing ensures correct interaction in the UI.

## 4. Test Environment
- Node.js
- Jest testing framework
- Browser for UI testing (Chrome/Edge)

## 5. Entry Criteria
- Code is implemented
- Functions are available for testing

## 6. Exit Criteria
- All unit tests pass
- No critical bugs remain

## 7. Risks
- UI functionality not covered by automated tests
- Incorrect input handling

## 8. Responsibilities
- Person 3: Testing and documentation
- Person 1: UI
- Person 2: Application logic