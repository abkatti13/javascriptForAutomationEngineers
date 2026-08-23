# javascriptForAutomationEngineers
# Project Elevate — JavaScript for Playwright Automation

This repository contains my hands-on JavaScript learning journey as part of **Project Elevate**.

The objective is not to become a JavaScript specialist in isolation. The focus is to learn the **core JavaScript concepts required to design, build, and maintain Playwright-based UI and API automation frameworks**.

The approach is:

> **Learn the JavaScript that I need for automation, apply it through hands-on exercises, and learn additional concepts organically as framework implementation demands them.**

---

## 🎯 Objective

Build strong enough JavaScript fundamentals to:

- Develop Playwright UI automation
- Develop Playwright API automation
- Build maintainable automation frameworks
- Read and understand existing JavaScript/Playwright code
- Write clean and reusable automation utilities
- Work confidently with API responses and test data
- Understand asynchronous JavaScript used extensively by Playwright
- Gradually move toward automation architecture

---

## 🧠 Learning Philosophy

This repository follows a **20/80 approach**.

I am intentionally prioritising concepts that provide the most value for:

- Playwright
- UI automation
- API automation
- Test data manipulation
- Framework development
- Automation architecture

Not every JavaScript feature will be covered upfront.

Lower-priority concepts will be maintained separately and revisited when they become relevant to real implementation needs.

---

# 📚 Learning Roadmap

## 1. JavaScript Fundamentals

- [x] Variables
- [x] `let`
- [x] `const`
- [x] Arithmetic operators
- [x] Assignment operators
- [x] Comparison operators
- [x] Logical operators
- [x] Type coercion
- [x] Operator precedence
- [x] Conditional statements
- [x] `if`
- [x] `else if`
- [x] Nested `if`
- [x] `switch`
- [x] `while`
- [x] `do...while`
- [x] `for`
- [x] `break`
- [x] `continue`

---

## 2. Functions

- [x] Function declaration
- [x] Parameters and arguments
- [x] Return values
- [x] Functions as values
- [x] Arrow functions
- [x] Callbacks
- [x] Scope
- [ ] Hoisting
- [ ] Closures

---

## 3. Objects

- [x] Object creation
- [x] Properties
- [x] Accessing properties
- [x] Updating properties
- [x] Adding properties
- [x] Nested objects
- [x] Objects containing functions
- [x] `this`
- [x] Objects inside arrays
- [x] `Object.keys()`
- [x] `JSON.stringify()`
- [x] Object destructuring

---

# 4. Arrays

## Completed

- [x] Array creation
- [x] Array indexing
- [x] `.length`
- [x] Arrays of objects
- [x] `push()`
- [x] `pop()`
- [x] `shift()`
- [x] `unshift()`
- [x] `for...of`
- [x] `map()`
- [x] `filter()`
- [x] `find()`
- [x] `some()`
- [x] `every()`
- [x] `forEach()`
- [x] `includes()`
- [x] `sort()`
- [x] Method chaining

## In Progress

- [x] `reduce()`

## Planned

- [ ] Spread operator
- [ ] Rest parameter
- [ ] Array destructuring
- [ ] `slice()`
- [ ] `splice()`
- [ ] `join()`
- [ ] `flat()`
- [ ] `flatMap()`

---

# 5. JavaScript Concepts for Playwright

These topics will become increasingly important as the learning moves from JavaScript fundamentals toward actual Playwright framework implementation.

- [ ] Optional chaining `?.`
- [ ] Nullish coalescing `??`
- [ ] Spread / Rest `...`
- [ ] Promises
- [ ] `async`
- [ ] `await`
- [ ] Error handling
- [ ] `try / catch / finally`
- [ ] Modules
- [ ] `import`
- [ ] `export`
- [ ] Classes
- [ ] Static methods
- [ ] Getters / setters
- [ ] Template literals
- [ ] Advanced object manipulation

---

# 🎭 Playwright Application

After establishing the required JavaScript foundation, the concepts will be applied directly to Playwright.

Planned areas include:

### UI Automation

- Browser and context management
- Page objects
- Locators
- Assertions
- Fixtures
- Test data
- Reusable utilities
- Configuration
- Environment management
- Parallel execution
- Reporting

### API Automation

- API requests
- Request payloads
- Response handling
- JSON manipulation
- Response validation
- Authentication
- API chaining
- Test data generation

### Framework Architecture

- Page Object Model
- API layer
- Utility layer
- Test data layer
- Configuration layer
- Fixtures
- Reusable components
- Reporting
- CI/CD integration

---

# 🧪 Hands-on Learning Approach

Every major JavaScript concept is followed by practical exercises.

The exercises intentionally use automation-oriented examples such as:

- Users
- Transactions
- Browsers
- Test configuration
- API responses
- Test data
- Response times
- Test results

Example:

```javascript
const activeUsers = users
    .filter(user => user.active)
    .map(user => user.username);