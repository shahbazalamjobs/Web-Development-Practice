

## Throw, and Try...Catch...Finally

The try statement defines a code block to run (to try). The catch statement defines a code block to handle any error. <br>
The finally statement defines a code block to run regardless of the result. The throw statement defines a custom error. <br>

In JavaScript, you can use the `throw` statement to manually throw an exception (error) when a particular condition or situation arises.  <br>
This allows you to handle exceptional cases in your code. To catch and handle these exceptions, you can use the `try...catch...finally` statement. <br>

Here's an overview of how `throw` and `try...catch...finally` work: <br>

1. **Throwing an Exception (`throw`):**
   - The `throw` statement is used to throw a user-defined exception or a built-in JavaScript error object.
   - It is followed by an expression or an error object that specifies the exception to be thrown.
   - Example:
     ```javascript
     function divide(a, b) {
       if (b === 0) {
         throw new Error("Division by zero is not allowed.");
       }
       return a / b;
     }
     ```

2. **Catching and Handling Exceptions (`try...catch`):**
   - The `try` block is used to wrap the code that may throw an exception.
   - If an exception is thrown inside the `try` block, it is caught by the `catch` block, and you can specify how to handle the exception.
   - The `catch` block takes an error parameter that represents the caught exception.
   - Example:
     ```javascript
     try {
       const result = divide(10, 0);
       console.log(result); // This line will not be executed.
     } catch (error) {
       console.error("An error occurred:", error.message);
     }
     ```

3. **Finally Block (`finally`):**
   - The `finally` block is optional and follows the `try` and `catch` blocks.
   - Code in the `finally` block is always executed, whether an exception is thrown or not.
   - It is typically used for cleanup tasks or actions that must occur regardless of whether an exception is thrown.
   - Example:
     ```javascript
     try {
       // Some code that may throw an exception
     } catch (error) {
       // Handle the exception
     } finally {
       // This block is always executed
       console.log("Cleanup or finalization code here.");
     }
     ```

4. **Multiple Catch Blocks:**
   - You can have multiple `catch` blocks to handle different types of exceptions.
   - Each `catch` block can specify a different error type to catch.
   - Example:
     ```javascript
     try {
       // Some code that may throw different exceptions
     } catch (error1) {
       // Handle error1
     } catch (error2) {
       // Handle error2
     }
     ```

Using `throw` and `try...catch...finally` allows you to gracefully handle exceptions in your JavaScript code, preventing unexpected crashes and providing error-handling mechanisms for various situations.

---

```js
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```

```
 o/p: adddlert is not defined
```

---

### Error in Division

```js
function divide(a, b) {
  if (b === 0) {
    throw "Division by zero is not allowed.";
  }
  return a / b;
}

try {
  const result = divide(10, 2);
  console.log("Result:", result); // Output: Result: 5

  // Uncomment the next line to trigger an error (division by zero)
  // const errorResult = divide(8, 0);
} catch (error) {
  console.error("An error occurred:", error);
} finally {
  console.log("This block is always executed.");
}
```
