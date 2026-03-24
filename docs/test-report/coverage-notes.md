# Code Coverage Notes

Coverage was measured with Jest using the command:

npx jest --coverage

**Result:** 
Statements: 89.18%
Branches: 79.31%
Functions: 94.44%
Lines: 88.88%

**Comment:**
The current automated unit tests focus on the class-based logic in the application, mainly:

ExpenseRepository
ExpenseService
SummaryService

The high coverage shows that the central business logic of the application is well covered by unit tests. The remaining uncovered lines are mainly related to branches and methods that were not prioritized in the current test iteration.


## Conclusion
The measured coverage is considered good for the scope of this project and supports the conclusion that the most important parts of the application logic have been tested in a systematic way.