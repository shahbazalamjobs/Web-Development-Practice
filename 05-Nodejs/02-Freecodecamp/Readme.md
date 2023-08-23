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

In Node.js, a module is essentially a reusable block of code that can be used to perform a specific set of tasks or provide a specific functionality. A module can contain variables, functions, classes, objects, or any other code that can be used to accomplish a particular task or set of tasks.

The primary purpose of using modules in Node.js is to help organize code into smaller, more manageable pieces. A module can then be imported at any time and used flexibly, which helps in creating reusable code components that can be shared across multiple projects.

To understand this, consider this example: Let's say you have defined lots of functions in your code that work with a huge volume of JSON data.

Losing your sleep and increased anxiety levels are common side effects of keeping all this stuff (functions + data + some other logic) in one single file.

So you, being a clever programmer, thought of making a separate file for the JSON data and a separate file for storing all the functions. Now, you can simply import the data and the functions whenever you want and use them accordingly. This method increases efficiency as your file size reduces drastically. This is the concept of modules!

## Creating Your Own Modules

Let's see how we can make our own modules. For this, we are going to write some code where we will be defining a function called `sayHello()` in a file called `hello.js`. This function will accept a name as the parameter and simply print a greeting message in the console.

We will then import it in another file called `app.js` and use it there. How interesting, right? 😂 Let's check out the code:

### hello.js

```javascript
function sayHello(name){
    console.log(`Hello ${name}`);
}

module.exports = sayHello;
```

## app.js

```js
const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');
```
