
// The while loop loops through a block of code as long as a specified condition is true.

// 1. While Loop
// The code in the loop will run, over and over again, as long as a variable (i) is less than 10:
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

/*
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/

// 2. Do while Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, before 
// checking if the condition is true, then it will repeat the loop as long as the condition is true.

let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

/* o/p: 
BMW
Volvo
Saab
Ford
*/

// 3. Comparing for and while loop : loops to collect the car names from the cars array:

// 3.1 for 
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}

// 3.2 while

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
