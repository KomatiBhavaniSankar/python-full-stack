
let a = 5;
let b =10;
console.log("operator:");

let sum = a+b;


let sub= a-b;


let div = a/b;

let multi = a*b;


let float = a%b;


let power = a**b;


console.log(sum, sub, div , multi, float, power);


//ASSIGNMENT OPERATORSt 
let x =10;
x+=5;// aad
x-=3;//sun
x*=2// muilti
x/=4//div
x%=3;// modules

console.log("Assignment operators");
console.log("x after assigmn=ent", x);
console.log("\n");








// 3. COMPARISON OPERATORS

// COMPARISON OPERATORS ARE USED TO COMPARE TWO VALUES AND RETURN THE OUTPUT
;

let isEqual = (a == b); // equal to (value only)
let isStrictEqual = (a === b); // equal to (value and type)
let isNotEqual = (a != b); // not equal to (value only)

let isStrictNotEqual = (a !== b); // not equal to (value and type)
let isGreaterThan = (a > b); // greater than
let isLessThan = (a < b); // less than

let isGreaterThanOrEqual = (a >= b); // greater than or equal to
let isLessThanOrEqual = (a <= b); // less than or equal to

console.log("Comparison Operators Output:");
console.log("isEqual :", isEqual);

console.log("isStrictEqual :", isStrictEqual);
console.log("isNotEqual :", isNotEqual);
console.log("isStrictNotEqual :", isStrictNotEqual);
   console.log("isGreaterThan :", isGreaterThan);
console.log("isLessThan :", isLessThan);
console.log("isGreaterThanOrEqual :", isGreaterThanOrEqual);
console.log("isLessThanOrEqual ):", isLessThanOrEqual);


// Logical Operators:
// Logical operators are used to combine multiple boolean expressions.
// They return boolean values based on the logic.

let c = -3;

// Logical AND (&&)
let andOperator = (a > 0 && b > 0); 

// Logical OR (||) 
let orOperator = (a > 0 || c > 0);

// Logical NOT (!) 
let notOperator = !(a < 0);  

console.log("Logical Operators Examples:");
console.log("AND Operator (a > 0 && b > 0):", andOperator); 
console.log("OR Operator (a > 0 || c > 0):", orOperator);   
console.log("NOT Operator !(a < 0):", notOperator);        


// 5. Bitwise Operators
// Bitwise operators perform operations on the binary representations of numbers



let bitwiseAnd = a & b;// Bitwise AND 
let bitwiseOr = a | b;// Bitwise OR  
 let bitwiseXor = a ^ b;// Bitwise XOR 

let bitwiseNotA = ~a;// Bitwise NOT 
 let leftShift = a << 1; // Left Shift  
let rightShift = a >> 1;// Right Shift 


console.log("Bitwise Operations:");
 console.log("Bitwise AND :", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);

console.log("Bitwise XOR", bitwiseXor);
 console.log("Bitwise NOT ", bitwiseNotA);
console.log("Left Shift:", leftShift);
console.log("Right Shift:", rightShift);
console.log("/n");

//6. TERNARY OPERATOR
// THE TERNRY OPERATOR IS SHORTHAND FOR THE 'if....else' statement

let age = 18;

let eligibity = (age > 18) ? "eligiable to vote" : "not";
console.log("Ternary Operation:");
console.log("eligibility:", eligibity);
console.log("/n");

//7. Typeof operator
// the 'typeof' operator is used to determine the type of variable or value

let variableType = typeof a;
console.log("typof");
console.log(variableType);
// the 'typeof' operator is used to determine the type of variable or value
