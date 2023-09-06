// Numbers

const squareRoot = Math.sqrt(25); // Square root
const absoluteValue = Math.abs(-7); // Absolute value

const strNumber = '42';
const numFromString = parseInt(strNumber); // Convert string to integer
const strFromNum = numFromString.toString(); // Convert integer to string

// NaN (Not-a-Number)
const invalidResult = 0 / 0;     // NaN

// Infinity and -Infinity
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;

// Number Methods
const num = 3.14159;
const fixedNum = num.toFixed(2);      // Round to 2 decimal places
const precisionNum = num.toPrecision(3); // 3 significant digits


// JavaScript has only one type of number. Numbers can be written with or without decimals.

// Numeric Literals
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let a = 123e5;   // 12300000
let b = 123e-5;  // 0.00123

// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point, etc.
// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let integer1 = 999999999999999;   // 999999999999999
let integer2 = 9999999999999999;  // 10000000000000000

// The maximum number of decimals is 17.

// Floating Precision
// Floating point arithmetic is not always 100% accurate:
let result = 0.2 + 0.1; // 0.30000000000000004
// To solve the problem above, it helps to multiply and divide:
let correctedResult = (0.2 * 10 + 0.1 * 10) / 10; // 0.3

// Adding Numbers and Strings
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.
let num1 = 10;
let num2 = 20;
let sumNum = num1 + num2; // Result is a number

let str1 = "10";
let str2 = "20";
let concatStr = str1 + str2; // Result is a string

let num3 = 10;
let str3 = "20";
let concatNumStr = num3 + str3; // Result is a string

let str4 = "10";
let num4 = 20;
let concatStrNum = str4 + num4; // Result is a string

// Numeric Strings
// JavaScript strings can have numeric content:
let numericStr = "100";

// JavaScript will try to convert strings to numbers in all numeric operations:
let strNum1 = "100";
let strNum2 = "10";
let divisionResult = strNum1 / strNum2; // Result is a number

// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let invalidResult = 100 / "Apple"; // Result is NaN

// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let positiveInfinity = 2;
while (positiveInfinity != Infinity) {
  positiveInfinity = positiveInfinity * positiveInfinity;
}

let divisionByZero1 = 2 / 0;  // Result is Infinity
let divisionByZero2 = -2 / 0; // Result is -Infinity

// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let hexValue = 0xFF; // 255

// JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:
let primitiveNumber = 123;

// Numbers can also be defined as objects with the keyword new:
let numberObject = new Number(123);

// Do not create Number objects.
// The new keyword complicates the code and slows down execution speed.
// Number Objects can produce unexpected results:
let equalityCheck1 = 500 == new Number(500); // true
let equalityCheck2 = 500 === new Number(500); // false
