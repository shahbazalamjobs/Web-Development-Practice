
// "use strict"; Defines that JavaScript code should be executed in "strict mode".

/* 
The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

All modern browsers support "use strict" except Internet Explorer 9 and lower:
*/

// 1.
"use strict";
x = 3.14;       // This will cause an error because x is not declared

// 2.
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

// 3. Declared inside a function, it has local scope (only the code inside the function is in strict mode):

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}


/*
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. 
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
*/


// 4. Using an object, without declaring it, is not allowed:

"use strict";
x = {p1:10, p2:20};      // This will cause an error

// 5. Deleting a variable (or object) is not allowed.

"use strict";
let x = 3.14;
delete x;                // This will cause an error


// 6. Deleting a function is not allowed.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error

// 7. Duplicating a parameter name is not allowed:

"use strict";
function x(p1, p1) {};   // This will cause an error

// 8. Octal numeric literals are not allowed:

"use strict";
let x = 010;             // This will cause an error

// 9. Octal escape characters are not allowed:

"use strict";
let x = "\010";            // This will cause an error


// For more details: https://www.w3schools.com/js/js_strict.asp


