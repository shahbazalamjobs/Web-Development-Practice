
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

// 1. Break
/*
The break statement is used to exit or terminate a loop prematurely.
It can be used within a for, while, or do...while loop to stop the loop's execution before it reaches its normal termination condition.
When a break statement is encountered, the program will immediately exit the loop and continue with the next statement after the loop.
*/

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

/*
o/p:
The number is 0
The number is 1
The number is 2
*/


// 2. Continue
/*
The continue statement is used to skip the current iteration of a loop and move to the next iteration.
When a continue statement is encountered, the loop will immediately jump to the next iteration, skipping
any code that follows the continue statement within the current iteration.
*/

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

/*
o/p: 
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/


// Label block

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo").innerHTML = text;

/*
o/p:
BMW
Volvo
*/

/*
The code defines a labeled block labeled as list. A labeled block is a block of code with a label
(list in this case) that allows you to use break or continue statements to control the flow of code within the block.

Inside this labeled block, two car brand names are added to the text variable with HTML line breaks. However, a break 
statement with the label "list" is used, exiting the block and preventing the execution of subsequent lines of code. 
*/
