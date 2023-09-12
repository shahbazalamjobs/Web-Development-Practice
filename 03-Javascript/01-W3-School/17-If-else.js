// If Else

var age = 18;

// Check if age is greater than or equal to 18
if (age >= 18) {
  console.log("You are an adult."); // Output: You are an adult.
} else {
  console.log("You are a minor."); // This block is not executed
}

// Check if a number is positive, negative, or zero
var number = -5;

if (number > 0) {
  console.log("The number is positive."); // This block is not executed
} else if (number < 0) {
  console.log("The number is negative."); // Output: The number is negative.
} else {
  console.log("The number is zero."); // This block is not executed
}

// Check if a number is even or odd
var num = 7;

if (num % 2 === 0) {
  console.log("The number is even."); // This block is not executed
} else {
  console.log("The number is odd."); // Output: The number is odd.
}

// Nested if-else statements to determine a grade
var score = 85;
var grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is " + grade); // Output: Your grade is B
