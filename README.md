# Expense Tracker Testing Project

This project was created as part of the course **Application Development and Testing**.  
The goal is to develop and test a simple web application that allows users to register expenses and view summaries by category and date.

## Group Members
- Vincenzo Rosati
- Ammar Saddi
- Sam Sahbaeirazavi

## Project Purpose
The project is used as a test object to apply systematic software testing and quality assurance according to the course requirements. The work includes development, unit testing, manual testing, test documentation, code coverage analysis, and Git-based collaboration.

## Main Features
- Register an expense with:
  - title
  - amount
  - category
  - date
- Show a list of registered expenses
- Show summary by category
- Show summary by date
- Remove an expense

## Technologies
- HTML
- CSS
- JavaScript
- Node.js
- Jest for unit testing
- Git and GitHub for version control and collaboration
- Lizard for cyclomatic complexity analysis

## Project Structure
The application is built using a class-based structure to improve modularity and testability.  
The main components are:

- `Expense` – represents an expense object
- `ExpenseRepository` – handles storage and retrieval of expenses
- `ExpenseService` – contains validation and expense management logic
- `SummaryService` – handles calculations and summaries

Dependencies are handled through **dependency injection**, which makes the logic easier to test and supports mocking in unit tests.

## How to Run the Tests

Install dependencies first:

npm install

Run unit tests:

npm test

Run tests with coverage:

npx jest --coverage

Run cyclomatic complexity analysis with Lizard:

python -m lizard src

If Lizard is not installed:

python -m pip install lizard

## Testing

The project includes:

Unit tests for core business logic
Manual UI test cases
Mock-based testing for isolated service testing
Test plan
Test cases
Manual test cases
Test report
Traceability matrix
Code coverage analysis
Cyclomatic complexity analysis

### Test Summary
The current automated test results are:

Test suites: 2
Total tests: 11
Passed tests: 11
Failed tests: 0

Code coverage results:

Statements: 89.18%
Branches: 79.31%
Functions: 94.44%
Lines: 88.88%

Cyclomatic complexity results from Lizard show that most functions have very low complexity, with an average CCN of 1.2 and no exceeded thresholds.

## Git Workflow

The project uses a simple Git workflow:

main branch for stable code
short-lived feature/test branches
pull requests for merging changes into main

## Notes

The main focus of the project is testability, testing documentation, and quality assurance, rather than advanced UI design or production-ready deployment.

## Project Structure
```text
expense-tracker-testing/
│
├─ src/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ app.js
│  │  ├─ Expense.js
│  │  ├─ ExpenseRepository.js
│  │  ├─ ExpenseService.js
│  │  └─ SummaryService.js
│  └─ index.html
│
├─ tests/
│  └─ unit/
│     ├─ ExpenseService.test.js
│     └─ SummaryService.test.js
│
├─ docs/
│  ├─ user-stories.md
│  ├─ test-plan.md
│  ├─ test-cases.md
│  ├─ manual-test-cases.md
│  ├─ test-report.md
│  ├─ traceability-matrix.md
│  └─ coverage-notes.md
│
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md

