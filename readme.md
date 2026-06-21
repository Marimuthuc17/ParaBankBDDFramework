# ParaBank Automation Assessment

## Overview
This project automates the ParaBank user registration and login flow using Playwright, JavaScript, Cucumber BDD, and Page Object Model (POM).

### Application Under Test
https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC

---

## Tech Stack

- Playwright
- JavaScript
- Cucumber BDD
- Page Object Model (POM)
- Node.js

---

## Test Scenario Covered

### Register New User
- Launch ParaBank Application
- Register a new user account
- Verify successful registration

### Login With Registered User
- Login using newly created account
- Verify Account Overview page

### Verify Account Balance
- Capture and print account balance after login

---

## Project Structure

```text
ParaBankBDDFramework
│
├── features
│   ├── signup.feature
│   └── stepDefinitions
│       └── signupSteps.js
│
├── pages
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   └── AccountPage.js
|
│__screenrecording
|   |__20260621-0630-51.3835147.mp4
|
|__ParaBankTestCases
|  |___ParaBankTestCases.xlsx
|
├── utils
│   └── BrowserManager.js
│
├── test-data
│   └── userData.js
│
├── cucumber.js
├── package.json
├── package-lock.json
└── playwright.config.js
|__readme.md
```

---

## Installation

Clone Repository

```bash
git clone https://github.com/Marimuthuc17/ParaBankBDDFramework.git
```

Navigate to Project

```bash
cd ParaBankBDDFramework
```

Install Dependencies

```bash
npm install
```

Install Playwright Browsers

```bash
npx playwright install
```

---

## Execute Test

```bash
npm test
```

---

## Expected Output

```text
ParaBank Application Launched
User Registration Successful
User Login Successful
Account Balance: $515.50

1 scenario (1 passed)
5 steps (5 passed)
```

---

## Test Artifacts

- Automation Code
- Excel Test Cases
- Screenshots (if applicable)

---

## Author

**Marimuthu**

QA Automation Engineer
