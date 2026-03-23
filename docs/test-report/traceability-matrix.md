# Traceability Matrix

| User Story | Test Case | Unit Test |
|------------|-----------|-----------|
| US1 – Registrera en utgift | TC1 – Validate correct expense input | should return true for a valid expense / should add a valid expense to the array |
| US2 – Se lista över utgifter | TC3 – Remove expense by id / TC4 – Calculate total amount | should remove an expense by id / should calculate the total amount of all expenses |
| US3 – Se sammanställning per kategori | TC5 – Group expenses by category | should group expenses by category and sum the amounts / should return an empty object when grouping by category with an empty array |
| US4 – Se sammanställning per datum | TC6 – Group expenses by date | should group expenses by date and sum the amounts / should return an empty object when grouping by date with an empty array |
| US5 – Fel vid ogiltigt belopp | TC2 – Reject invalid amount | should return false for an expense with invalid amount / should not add an invalid expense to the array |
| US6 – Fel om kategori eller datum saknas | – | Not implemented yet in automated tests |