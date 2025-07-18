### SBA 6: TypeScript and Advanced JavaScript

#### Overview

This project serves as a practical assessment of TypeScript and advanced JavaScript skills. It involves building a fully functional, real-world E-commerce Product Management System using TypeScript

---

#### Objectives

By completing this assessment, we will demonstrate proficiency in:

- TypeScript language features

- Object-Oriented Programming (OOP) principles

- Asynchronous operations with async/await

- Robust error handling

- External API integration

---

#### Project Structure

```bash
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
```

---

#### How to Clone and Run the Project

---

**Clone the Repository**

```bash
git clone https://github.com/urmee04/e-commerce-system.git
cd e-commerce-system
```

**Install Dependencies**

```bash
npm install
```

**Compile TypeScript**

```bash
npx tsc
```

**Run the Compiled Code**

```bash
node main.js
```

---

#### Reflection

**How you implemented TypeScript features and OOP principles?**

I applied TypeScript and OOP principles to build an E-commerce Product Management System. I structured the application using a Product class to encapsulate all product-related data and behaviors, such as calculating discounted prices, computing tax based on product category, and formatting the product's display details. By modularizing logic into separate files and using custom utility functions like calculateDiscount and calculateTax, I was able to keep the code clean and maintainable.
**The challenges you encountered and how you overcame them?**

One of the key challenges was accurately implementing category-specific tax rules, particularly ensuring groceries were taxed differently from other items. Another hurdle involved validating the API response structure before mapping raw data to class instances. This required careful checks to avoid runtime errors and ensure all data was handled safely and predictably. Additionally, transforming plain JSON objects into fully functional class instances provided a real-world use case for working with typed object models in TypeScript.

**How you handled asynchronous operations and error management?**
For asynchronous operations, I used async/await syntax to fetch product data from an external API. This helped maintain readability and reduced callback nesting. All API interactions were wrapped in try/catch blocks, and I created a centralized error handling utility to gracefully manage unexpected issues across the application. This setup ensured that any fetch or runtime errors could be logged or dealt with uniformly, supporting a more robust and fault-tolerant architecture.

---

#### Resources

Besides class lectures and class materials I used the following resources:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- [Await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

- [TypeScript tutorial](https://www.youtube.com/watch?v=CHnTTzD1pAQ&list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3)
