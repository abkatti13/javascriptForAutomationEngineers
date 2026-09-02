# Project Elevate

Project Elevate is a hands-on JavaScript learning repository for building the foundations needed for Playwright test automation. Each lesson uses small, automation-oriented examples—such as browser configuration, test users, transactions, and response times—to turn core language concepts into practical skills.

Playwright and TypeScript are future application targets; this repository currently contains standalone JavaScript exercises rather than a Playwright test framework.

## Learning approach

The focus is on the JavaScript concepts that are most useful when designing and maintaining UI and API automation:

- Learn one concept at a time.
- Practise it in a focused exercise.
- Use automation-domain examples where possible.
- Build toward reusable utilities, configuration, and eventually a Playwright framework.

## Repository structure

```text
.
├── Day 1/                     # Variables, constants, and basic expressions
├── Day 2 - Opearators/        # Operators, conditions, loops, and exercises
├── Day 3 - functions/         # Functions, arrow functions, callbacks, and scope
├── Day 4 - Objects/           # Objects, methods, nested objects, and `this`
├── Day 5 - Arrays/            # Array methods, destructuring, spread, and rest
├── Day 6 - Promises/          # Promises, async/await, and error handling
└── Day 7 - modules/           # ES modules and a `BrowserConfig` class
```

> The folder name `Day 2 - Opearators` reflects the existing project structure.

## Completed topics

- Variables, `let`, `const`, data types, type coercion, and basic expressions
- Arithmetic, assignment, comparison, and logical operators
- Conditional statements and loops
- Function declarations, parameters, return values, default parameters, function expressions, callbacks, arrow functions, and scope
- Objects, properties, methods, nested objects, `this`, `Object.keys()`, `JSON.stringify()`, and object destructuring
- Arrays and common methods: `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `find`, `some`, `every`, `forEach`, `includes`, `sort`, `reduce`, `slice`, `splice`, `join`, and `flat`
- Array destructuring, spread syntax, and rest parameters
- Promises, `async`/`await`, `Promise.all`, `try`/`catch`/`finally`, and thrown errors
- ES modules with `import` and `export`
- Classes, constructors, instance properties, methods, and `this`

## Run an exercise

No dependencies or package installation are required. Run an individual non-module lesson with Node.js:

```bash
node "Day 5 - Arrays/ArraysReduce.js"
```

The Day 7 examples use ES modules. Run the entry point with Node.js 22+:

```bash
node "Day 7 - modules/testConfig.js"
```

## Current example

The Day 7 module exercise separates browser helpers from a reusable configuration class:

```javascript
import { getSupportedBrowsers, isSupportedBrowser } from "./BrowserUtils.js";
import { BrowserConfig } from "./BrowserConfig.js";

const browsers = getSupportedBrowsers();
const isValid = isSupportedBrowser("firefox");
const chromeConfig = new BrowserConfig("Chrome", true);
```

This is the starting point for the kind of browser configuration and utility code commonly used in automation projects.

## Next steps

- Optional chaining (`?.`) and nullish coalescing (`??`)
- More advanced object and class patterns
- Playwright UI and API automation
- TypeScript fundamentals and migration of examples
- Test structure, fixtures, reporting, configuration, and CI/CD

## Goal

Develop the JavaScript confidence to read, write, and maintain clean Playwright automation code—then apply these foundations to a practical, maintainable automation framework.
