# 🎭 Playwright Automation Projects

Welcome to my collection of hands-on automation projects using **Playwright + JavaScript**.  
This repo showcases various real-world automation use cases — from form submissions to API + UI test integration.

Each project is structured for clarity and scalability, using the **Page Object Model (POM)** and best testing practices.

---

## 📁 Project List

### 1️⃣ API + UI Test Combination
- Creates a user via **API** (using Axios).
- Displays and validates user data on a **mock static UI**.
- Demonstrates hybrid testing (API + UI).

### 2️⃣ Automated Login and Data Extraction
- Logs into a website and extracts product names + prices.
- Saves the extracted data as **JSON** and **CSV** files.

### 3️⃣ E-commerce Checkout Automation
- Automates adding products to the cart and completing checkout.
- Verifies cart items, order summary, and confirmation page.

### 4️⃣ Form Submission and Validation
- Fills out a contact form with dynamic data.
- Verifies the success message and handles validation cases.

---

## 🧠 Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript (ESModules)
- Axios (for API requests)
- dotenv (for environment config)
- Page Object Model (POM)
- Node.js

---

## 🚀 Getting Started

### 🛠️ Install Dependencies
```
npm install
```

### 📄 Set Up `.env`
Create a `.env` file in the root if the project needs environment variables.  
Make sure `.env` is listed in `.gitignore` to keep sensitive data private.

### ▶️ Run Tests
```
npx playwright test
```

---

## 📚 Folder Structure
```
playwright-automation-projects/
├── project-1-ecommerce-checkout/
├── project-2-login-data-extraction/
├── project-3-form-submission/
├── project-4-api-ui-combo/
├── utils/
├── pages/
├── README.md
└── .gitignore
```

---

## 💡 Why This Repo?

This repo is part of my journey to level up as an automation tester using Playwright.  
It also acts as a portfolio to showcase practical testing skills — from real-world scenarios to hybrid approaches — all wrapped in clean, scalable code.

---

> Let’s get testing 🚀  
```

---
