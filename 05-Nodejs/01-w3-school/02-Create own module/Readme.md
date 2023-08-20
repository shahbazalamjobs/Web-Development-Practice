# Creating our own modules

Certainly! I'll provide both the CommonJS (`require`) and ES6 (`import`) versions of the code snippets for importing a module named `myModule.js` located in a directory named `my-project`.

Assuming the file structure is:

```
my-project/
  myModule.js
  main.js
```

**Using `require` with CommonJS:**

```javascript
// main.js (CommonJS)
const myModule = require('./myModule'); // The .js extension is optional

const currentDateTime = myModule.myDateTime();
console.log(currentDateTime);
```

```javascript
// myModule.js (CommonJS)
exports.myDateTime = function () {
  return new Date();
};
```

**Using `import` with ES6 Modules:**

```javascript
// main.mjs (ES6 module)
import { myDateTime } from './myModule.js'; // Include the .js extension

const currentDateTime = myDateTime();
console.log(currentDateTime);
```

```javascript
// myModule.mjs (ES6 module)
export function myDateTime() {
  return new Date();
}
```

Remember to use the `.mjs` extension for ES6 modules (or set up your Node.js environment to use ES6 modules without the extension). For CommonJS, you can either include the `.js` extension or omit it.

Choose the appropriate version (CommonJS or ES6) based on your Node.js version and project setup. If you're using a modern version of Node.js (13.2.0 or later), you can use ES6 modules. If you're working with older Node.js versions or need to maintain compatibility with CommonJS modules, you can use the CommonJS syntax.
