
// Different Kinds of Loops

/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

// 1. The For Loop
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

// 2. Loop scope

/* With var, a variable declared inside a loop is visible outside the loop, potentially causing issues.
With let, a variable declared inside a loop is only visible within that loop, avoiding conflicts and
adhering to block scoping rules. Use let for better scoping control. */

// 2.1 Using var in a loop:

var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

/* In this example, when you use var to declare i inside the loop, it redeclares the variable i from the outer scope, 
effectively overwriting its value. After the loop, the value of i is 10. */

// 2.2 Using let in a loop:

let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

/* In this example, when you use let to declare i inside the loop, it creates a new variable i that is scoped to the loop block. 
It does not affect the i variable from the outer scope. After the loop, the value of i outside the loop remains 5. */

// 3. 
