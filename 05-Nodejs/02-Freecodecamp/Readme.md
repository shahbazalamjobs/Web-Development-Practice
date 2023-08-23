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


In this case, the file hello.js can be referred to as the module. Every module has an object called exports which contains everything you want to export from the module, such as variables or functions. In our case, we're defining a function in the hello.js file and directly exporting it.

The app.js file imports the sayHello() function from hello.js and stores it in the sayHello variable. To import something from a module, we use the require() method, providing the path to the module. Now we can simply invoke the function by passing a name as a parameter. Running the code in the app.js file will produce the following output:

```
Hello John
Hello Peter
Hello Rohit
```

---


# Note on `module.exports`

In the previous section of the article, we explored how to utilize `module.exports`. However, it's crucial to delve a bit deeper into its functionality. This section serves as a mini tutorial, illustrating how we can export both single variables/functions and multiple variables/functions using `module.exports`. Let's dive in:

`module.exports` is a special object in Node.js that facilitates the exportation of functions, objects, or values from a module, enabling other modules to access and utilize them. Here's an example showcasing the use of `module.exports` to export a function from a module:

```js
// myModule.js

function myFunction() {
  console.log('Hello from myFunction!');
}

module.exports = myFunction;
```

In this instance, we define `myFunction` and then export it using `module.exports`. Other modules can now require this module and utilize the exported function:

```js
// app.js

const myFunction = require('./myModule');

myFunction(); // logs 'Hello from myFunction!'
```

This situation appears seamless and all is well. However, complexities arise when we must export multiple functions and variables from a single file. The issue lies in the fact that using `module.exports` multiple times in one module will replace the previously assigned value with the new one. Consider this code:

```js
// module.js

function myFunction() {
  console.log('Hello from myFunction!');
}

function myFunction2() {
  console.log('Hello from myFunction2!');
}

// First Export
module.exports = myFunction;

// Second Export
module.exports = myFunction2;
```

In this example, we initially export `myFunction()`. Yet, we subsequently overwrite `module.exports` with a new function, `myFunction2()`. Consequently, only the second export statement will take effect, and `myFunction()` will not be exported.

To overcome this predicament, you can assign `module.exports` to an object containing all the functions you intend to export, like so:

```js
// myModule.js

function myFunction1() {
  console.log('Hello from myFunction1!');
}

function myFunction2() {
  console.log('Hello from myFunction2!');
}

module.exports = {
  foo: 'bar',
  myFunction1: myFunction1,
  myFunction2: myFunction2
};
```

In this example, we export an object with three properties: `foo`, `myFunction1`, and `myFunction2`. Other modules can require this module and access these properties:

```js
// app.js

const myModule = require('./myModule');

console.log(myModule.foo); // logs 'bar'
myModule.myFunction1(); // logs 'Hello from myFunction1!'
myModule.myFunction2(); // logs 'Hello from myFunction2!'
```

To sum up, you can utilize `module.exports` multiple times in your Node.js code. However, it's essential to recognize that each new assignment will supersede the previous one. To efficiently export multiple items, use an object to consolidate these exports.

---


# Types Of Modules in Node

There are 2 types of modules in NodeJS:

- Built In Modules: These are modules included in Node by default, so you can use them without installation. You just need to import them and get started.
- External Modules: These are modules created by other developers which are not included by default. So you need to install them first before using them.

![image](https://github.com/shahbazalamjobs/Web-Development-Practice/assets/125631878/c6b082d2-90f8-4e7e-9aca-7e803acb6895)


---

1. OS Module

```js
const os = require('os')

// os.uptime()
const systemUptime = os.uptime();

// os.userInfo()
const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

// Let's Check The Results:
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);
```

Output:

```
521105
{
	uid: -1,
	gid: -1,
	username: 'krish',
	homedir: 'C:\\Users\\krish',
	shell: null
}
{
	name: 'Windows_NT',
	release: '10.0.22621',
	totalMem: 8215212032,
	freeMem: 1082208256
}
```
os.uptime() tells the system uptime in seconds.
os.userInfo() gives the information about the current user.
os.type() - Tells the name of the Operating System
os.release() - Tells the release version of the Operating System
os.totalMem() - Tells the total amount of memory available in bytes
os.freeMem() - Tells the total amount of free memory available in bytes

---

2. Path Module

```js
// Import 'path' module using the 'require()' method:
const path = require('path')

// Assigning a path to the myPath variable
const myPath = '/mnt/c/Desktop/NodeJSTut/app.js'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);
```

```
{
  fileName: 'app.js',
  folderName: '/mnt/c/Desktop/NodeJSTut',
  fileExtension: '.js',
  absoluteOrNot: true,
  detailInfo: {
    root: '/',
    dir: '/mnt/c/Desktop/NodeJSTut',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  }
}
```


1. **Path Separators:**
   - Windows uses backslash (`\`) as the separator in file paths.
   - macOS/Linux use forward slash (`/`) as the separator.
   - Example:
     ```javascript
     // Windows
     console.log('\\'); // Outputs: \

     // macOS/Linux
     console.log('/'); // Outputs: /
     ```

2. **Root Directory for User's Files:**
   - Windows: `C:\Users\username`
   - macOS/Linux: `/Users/username/`

3. **Path Module Functions:**
   - `path.sep`: System-specific path separator.
     ```javascript
     console.log(path.sep); // \ (Windows) or / (macOS/Linux)
     ```

   - `path.join(...)`: Joins paths using system-specific separator.
     ```javascript
     console.log(path.join('folder1', 'folder2', 'file.txt'));
     // Outputs: folder1\folder2\file.txt (Windows)
     // Outputs: folder1/folder2/file.txt (macOS/Linux)
     ```

   - `path.resolve(...)`: Joins paths with the absolute path of the current working directory.
     ```javascript
     console.log(path.resolve('folder1', 'folder2', 'file.txt'));
     // Assuming current working directory is C:\Desktop\NodeJSTut (Windows)
     // Outputs: C:\Desktop\NodeJSTut\folder1\folder2\file.txt
     ```

Remember to import the `path` module before using its functions:
```javascript
const path = require('path');
```

---
 
3. Module
6. 

