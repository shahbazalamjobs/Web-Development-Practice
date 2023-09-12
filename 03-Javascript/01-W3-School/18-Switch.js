// Switch Case

/*
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

1. This example uses the weekday number to calculate the weekday name:
*/

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

/*
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
*/

// 2. The default keyword specifies the code to run if there is no case match:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

// 3. Common Code Blocks

/* Sometimes you will want different switch cases to use the same code.
In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:let text; */

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML = text;

/*
Switching Details
If multiple cases matches a case value, the first case is selected.
If no matching cases are found, the program continues to the default label.
If no default label is found, the program continues to the statement(s) after the switch.
*/


// Switch cases use strict comparison (===).

/* The values must be of the same type to match.
A strict comparison can only be true if the operands are of the same type.
In this example there will be no match for x: */

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
