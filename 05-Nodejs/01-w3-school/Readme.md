# Extra Notes:

### 3. Read-query-string.js

Syntax:
ES6 modules use import and export statements.
CommonJS uses require() to import and module.exports or exports to export.

Scope:
ES6 modules have their own scope, making imported items more encapsulated.
CommonJS modules allow modifications to exported objects after they're exported.

Loading:
ES6 modules load asynchronously, potentially improving performance.
CommonJS modules load synchronously, which can block execution.

Optimization:
ES6 modules are statically analyzable, enabling better optimizations.
CommonJS modules are dynamically evaluated, which can limit certain optimizations.

Browser Support:
ES6 modules are natively supported in modern browsers with type="module".
CommonJS modules need bundlers or transpilers for browser usage.

Node.js Usage:
ES6 modules require changes in module loading and use .mjs extension.
CommonJS modules are the default in Node.js and use .js extension.


---


Certainly! Here are examples of code for both ES6 modules and CommonJS modules to illustrate their syntax and usage:

**ES6 Modules:**

File: `mathUtils.js`
```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

File: `main.js`
```javascript
// main.js
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3));      // Output: 8
console.log(subtract(10, 4)); // Output: 6
```

**CommonJS Modules:**

File: `mathUtils.js`
```javascript
// mathUtils.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

File: `main.js`
```javascript
// main.js
const mathUtils = require('./mathUtils.js');

console.log(mathUtils.add(5, 3));      // Output: 8
console.log(mathUtils.subtract(10, 4)); // Output: 6
```

- In the ES6 example, the `import` statement is used to import specific functions from the `mathUtils.js` module, and the `export` statements are used to export functions from that module.

- In the CommonJS example, the `require()` function is used to import the entire `mathUtils.js` module, and functions are accessed using the `mathUtils` object.

- Please note that the ES6 example requires proper environment setup and module loading configuration, while the CommonJS example is suitable for the default behavior in Node.js.

---

## Split the Query String

URL parsing is the process of breaking down a web address (URL) into its individual parts, like the protocol, domain, path, query parameters, and more. This helps software understand and work with URLs for tasks like fetching web content, creating links, and handling data from web addresses.

