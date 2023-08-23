# NodeJs

1. **Node as an Environment:**
   - Node allows running JavaScript code "Outside the web browser."
   - It provides an environment for executing JavaScript on servers and other non-browser contexts.

2. **Node's Role:**
   - Node acts as an intermediary, taking JavaScript code and executing it using its runtime environment.

3. **Use of Google's V8 Engine:**
   - Node utilizes Google's V8 Engine to convert JavaScript code into machine code.
   - V8 Engine is a high-performance JavaScript engine used in various applications, including browsers.

4. **Access Limitations:**
   - Node lacks access to browser-specific features like the DOM, window object, and localStorage.
   - You can't use functions like `document.querySelector()` or `alert()` in Node as they pertain to browser interactions.

5. **Server-Side vs. Client-Side:**
   - Node is designed for server-side programming, whereas browser features are used for client-side programming.
   - Node is used to build server applications, APIs, and backend services.

6. **Key Distinction:**
   - Node extends the capabilities of JavaScript beyond browsers, making it suitable for various server-related tasks.

7. **JavaScript Execution:**
   - Node executes JavaScript code independently of the browser, enabling broader application possibilities.

8. **Error Example:**
   - Attempting to use browser-specific functions in Node will result in errors, emphasizing the distinction between server and client contexts.

Remember, these points capture the core information you provided about Node. If you'd like to add more depth or details, feel free to expand on each point further.

---

# Global Variables in Node.js

In this section, we'll delve into the concept of Global Variables in Node.js. These are variables that store data and have the unique property of being accessible from any part of your code, regardless of its depth or nesting.

**1. Introduction to Global Variables:**
Global Variables are a fundamental aspect of Node.js. They serve as data containers accessible throughout your codebase.

**2. Commonly Used Global Variables:**
Two frequently used Global variables you should be aware of are:

   - **`__dirname`:** This variable holds the path to the current working directory.
   - **`__filename`:** This variable stores the path to the current working file.

**3. Using `__dirname` and `__filename`:**

To better understand these variables, follow these steps:

   a. Create a new folder named "NodeJSTut" on your Desktop.
   
   b. Open this folder using your preferred text editor (for this tutorial, we'll use VS Code).
   
   c. Inside "NodeJSTut," create a new file named "app.js."
   
   d. Open an integrated terminal within VS Code.

**4. Code Example:**

Inside "app.js," insert the following code:

```javascript
// __dirname Global Variable
console.log(__dirname);

// __filename Global Variable
console.log(__filename);
```

**5. Running the Code:**

Execute the code by opening a terminal and running the command `node app.js`. This action will display the absolute path of the current working directory and the path to the current file. For example, the output might look like:

```
C:\Desktop\NodeJSTut
C:\Desktop\NodeJSTut\app.js
```

**6. Creating Custom Global Variables:**

You can create your own global variables, enhancing accessibility across your codebase:

```javascript
// Define a global variable in Node.js
global.myVariable = 'Hello World';

// Access the global variable
console.log(myVariable); // Output: Hello World
```

This demonstrates how to establish and utilize custom global variables in Node.js.

Understanding and utilizing global variables can significantly contribute to the versatility and reach of your Node.js applications.

---

# Modules in NodeJs

In Node.js, modules are fundamental units of code that offer reusability and allow you to perform specific tasks or provide distinct functionality.

**Main Points:**

1. **Understanding Modules:**
   - Modules in Node.js encapsulate code for specific purposes.
   - Modules can hold variables, functions, classes, and more.
   - Their primary purpose is to enhance code organization and reusability.

2. **Advantages of Modularization:**
   - Modules help break down code into manageable components.
   - Importing modules enables flexible usage and sharing across projects.
   - Managing large codebases becomes easier with modular design.

3. **Example Use Case: Handling JSON Data and Functions:**
   - Managing numerous functions for extensive JSON data manipulation.
   - Aggregating all functions, data, and logic into one file results in complexity.
   - Solution involves segregating functions and data into separate files for clarity.
   - Modules facilitate seamless import of data and functions, leading to efficient code organization.

4. **Creating Custom Modules:**
   - Demonstrating the creation of a custom module using a greeting function.

5. **Code Illustrations:**

**Code within `hello.js` File:**

```javascript
function sayHello(name){
    console.log(`Hello ${name}`);
}

export default sayHello;
```

**Code within `app.js` File:**

```javascript
import customGreeting from './hello.js';

customGreeting('John');
customGreeting('Peter');
customGreeting('Rohit');
```

In this example, the `hello.js` module exports the `sayHello` function, while the `app.js` file imports and uses it to greet different names.

By harnessing the power of modules, Node.js developers can structure code more effectively, promote reusability, and create applications that are easier to manage and extend.
