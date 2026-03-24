# Test Report

## Introduction
The purpose of this project was to apply unit testing techniques using Jest in a JavaScript application. The goal was to test the core functionality of an expense tracking system and evaluate the quality of the tests using code coverage.

## System Under Test
The system was refactored into a class-based structure to improve modularity and testability. The main components are:

- `Expense`
- `ExpenseRepository`
- `ExpenseService`
- `SummaryService`

The services use dependency injection by receiving the repository as a dependency.

## Test Strategy
Unit testing was performed using **Jest**. The focus was on testing the core business logic rather than UI or DOM functionality.

The following classes were tested:

- `ExpenseService`
  - Adding valid and invalid expenses
  - Removing expenses
  - Retrieving all expenses
  - Testing behavior using a mock repository

- `SummaryService`
  - Calculating total expenses
  - Grouping expenses by category
  - Grouping expenses by date
  - Handling empty data cases

Mocking was used to isolate the service layer from the repository and ensure that tests focus only on the logic being tested.

## Test Results
- Test suites: 2
- Total tests: 11
- Passed tests: 11
- Failed tests: 0

All tests passed successfully.

## Code Coverage
Code coverage was measured using Jest:

- Statements: 89.18%
- Branches: 79.31%
- Functions: 94.44%
- Lines: 88.88%

## Cyclomatic Complexity (Lizard)
Cyclomatic Complexity Metrics were calculated using the Lizard tool.

The results show that most functions have very low complexity, mainly CCN 1.  
The highest value was found in `isValidExpense` with CCN 5.  
Some functions such as `handleAddExpense`, `groupByCategory`, and `groupByDate` have CCN 2.

The average complexity is 1.2, and no thresholds were exceeded.

This indicates that the code is simple, easy to understand, and maintainable.

## Discussion
The results show that the most important parts of the application logic are covered by unit tests. The use of classes and dependency injection made it easier to isolate and test functionality.

The addition of mocking improved the test quality by allowing isolation of dependencies and more controlled test scenarios.

During the development process, the code was refactored from a single-file structure into multiple classes to meet the project requirement and improve testability.

Some parts of the application, such as UI/DOM interactions, are not covered by these tests. However, this was not the main focus of the project.

## Conclusion
The project demonstrates how unit testing can be applied to a JavaScript application using Jest. The achieved coverage, use of mocking, and passing tests indicate that the core functionality works as expected and is reasonably well tested.