
// Type Conversion

//  1. Unary + Operator
let y = "5";      // y is a string
let x = + y;      // x is a number

// 2. 
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)


// String to Number
const strNum = "42";
const num = Number(strNum);
console.log(num); // 42 (number)

// Number to String
const num = 42;
const strNum = String(num);
console.log(strNum); // "42" (string)

// Boolean to String
const bool = true;
const strBool = String(bool);
console.log(strBool); // "true" (string)

// String to Boolean
const strBool = "true";
const bool = Boolean(strBool);
console.log(bool); // true (boolean)

// Implicit Type Conversion (Coercion)
const num = 42;
const str = "2";
const result = num * str; // Implicitly converts str to a number and performs multiplication
console.log(result); // 84 (number)

// ParseInt and ParseFloat
const strNum = "42.5";
const parsedInt = parseInt(strNum); // Parses to an integer
const parsedFloat = parseFloat(strNum); // Parses to a floating-point number
console.log(parsedInt); // 42 (number)
console.log(parsedFloat); // 42.5 (number)

// Falsy and Truthy Values
const falsyValue = ""; // Falsy value
const truthyValue = "Hello"; // Truthy value
const boolFalsy = Boolean(falsyValue);
const boolTruthy = Boolean(truthyValue);
console.log(boolFalsy); // false (boolean)
console.log(boolTruthy); // true (boolean)

// Using the + Operator for String Concatenation
const num = 42;
const str = " is the answer.";
const result = num + str; // Converts num to a string and concatenates
console.log(result); // "42 is the answer." (string)

// Using Template Literals for String Conversion
const num = 42;
const str = `The answer is ${num}`; // Converts num to a string within the template literal
console.log(str); // "The answer is 42" (string)


// Automatic Type Conversion
// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
