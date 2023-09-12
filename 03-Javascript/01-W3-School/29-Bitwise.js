
// Bitwise

// Bitwise AND (&)
const num1 = 5;  // 0101 in binary
const num2 = 3;  // 0011 in binary
const resultAND = num1 & num2; // Perform bitwise AND
console.log(resultAND); // Output: 1 (0001 in binary)

// Bitwise OR (|)
const num1 = 5;  // 0101 in binary
const num2 = 3;  // 0011 in binary
const resultOR = num1 | num2; // Perform bitwise OR
console.log(resultOR); // Output: 7 (0111 in binary)

// Bitwise XOR (^)
const num1 = 5;  // 0101 in binary
const num2 = 3;  // 0011 in binary
const resultXOR = num1 ^ num2; // Perform bitwise XOR
console.log(resultXOR); // Output: 6 (0110 in binary)

// Bitwise NOT (~)
const num = 5; // 0101 in binary
const resultNOT = ~num; // Perform bitwise NOT
console.log(resultNOT); // Output: -6 (1010 in binary, two's complement representation)

// Left Shift (<<)
const num = 5; // 0101 in binary
const shiftAmount = 2;  // 0010 in binary
const resultLeftShift = num << shiftAmount; // Perform left shift
console.log(resultLeftShift); // Output: 20 (10100 in binary)

// Right Shift (>>)
const num = 20; // 10100 in binary
const shiftAmount = 2;
const resultRightShift
