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


---


| Aspect        | Packages                    | Modules                | Utilities                 | Dependencies              |
|---------------|-----------------------------|------------------------|---------------------------|---------------------------|
| Definition    | Collections of related code, resources, and configuration files | Self-contained units of code encapsulating functionality | Reusable functions/tools for common tasks | External components needed for functionality |
| Scope         | Can include multiple modules | Individual units of code | Can include multiple functions | External code/packages/modules |
| Distribution  | Can be published to package registries | Part of the program structure | Not typically distributed independently | Installed using package managers |
| Reusability   | Can be reused across different projects | Can be reused within the same project | Reusable functions across projects | Can be reused across projects |
| Encapsulation | Contains various modules or code files | Provides isolated scope | Contains related functions | Required for specific functionality |
| Purpose       | Provides a set of related functionalities | Organizes and segments code | Provides common solutions | Makes external functionality available |
| Examples      | npm packages, Python packages | JavaScript ES6 modules | lodash library, moment.js | Express.js, axios library |


---

### HTML form 
```
<form>: This is an HTML element used to create a form on the page. Forms are used to gather user input 
and send it to the server for processing.

action="/upload": The action attribute specifies the URL to which the form data will be sent when the 
user submits the form. In this case, it's set to "/upload", which means the data will be sent to the 
server's "/upload" endpoint.

method="post": The method attribute specifies the HTTP method used to send the form data. In this case,
 it's set to "post", which means the data will be sent in the body of an HTTP POST request.

enctype="multipart/form-data": The enctype attribute specifies how the form data should be encoded before
sending it to the server. When dealing with file uploads, multipart/form-data is used to handle binary
data like files.

<input>: This is an HTML element used to create input fields within the form. In this case, the input type 
is set to "file", which allows the user to select a file from their local device.

name="file": The name attribute specifies the name of the input field. This name is used to identify the 
field when the form is submitted to the server.
<button>: This is an HTML element used to create a button within the form.

type="submit": The type attribute specifies the type of button. In this case, it's a submit button, which,
 when clicked, will trigger the form submission.
```
