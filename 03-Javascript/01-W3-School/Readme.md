
## var, let, const

- var is function-scoped, while let and const are block-scoped, meaning they have different visibility levels.
- var allows variable hoisting, which means it can be used before declaration, potentially causing unexpected behavior.
- let allows reassignment of variables, while const does not permit reassignment, though it allows modifying object properties.
- Using let and const is recommended in modern JavaScript as they provide better scoping and more predictable behavior, 
reducing bugs and making code easier to understand.

## Hoisting in var, let, const

- In JavaScript, let and const declarations are also hoisted, but there's a key difference compared to var.
- While both let and const declarations are moved to the top of their containing block or scope during the compilation phase, they are not initialized.
- This means that you can't access their values before the actual declaration in your code, unlike var, which is initialized with undefined.
- This behavior is known as the "temporal dead zone" (TDZ), and trying to access a let or const variable before its declaration will result in a ReferenceError.

## string operation

- let x = 16 + 4 + "Volvo";  // 20Volvo
- let x = "Volvo" + 16 + 4;  // Volvo164
