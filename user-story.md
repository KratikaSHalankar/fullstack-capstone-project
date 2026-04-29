# User Story

As a user, I need a platform where I can send and receive gifts so that I can easily share happiness with friends and family.

---

## Details and Assumptions
- The system allows users to register and login.
- Users can browse available gifts.
- Each gift has a category, name, and description.
- Backend is built using Node.js and Express.
- Data is stored in MongoDB.
- Users can search gifts by category.

---

## Acceptance Criteria

### Scenario 1: User views gift list
Given the user is on the homepage  
When the user requests gift data  
Then the system displays a list of available gifts  

### Scenario 2: User searches gifts by category
Given the user is on the search page  
When the user selects a category  
Then the system returns matching gifts  

### Scenario 3: User logs in successfully
Given the user enters valid credentials  
When the user clicks login  
Then the system authenticates the user and returns success message  
