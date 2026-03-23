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
- Jest for unit testing
- Git and GitHub for version control and collaboration

## Project Structure
Open src/index.html in a browser.

## How to Run the Tests

Install dependencies first:

npm install

Run unit tests:

npm test

Run tests with coverage:

npx jest --coverage

#### Testing

The project includes:

Unit tests for core logic functions
Edge-case tests
Manual UI test cases
Test plan
Test cases
Test report
Traceability matrix
Code coverage notes

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
│  │  └─ app.js
│  └─ index.html
│
├─ tests/
│  └─ unit/
│     └─ app.test.js
│
├─ docs/
│  ├─ user-stories/
│  ├─ test-plan/
│  ├─ test-cases/
│  └─ test-report/
│
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md


