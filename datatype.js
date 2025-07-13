
// Primitive Data Types in JS

//     Number
let number = 43; 

// String
let string = "Hello, world";

//  Boolean
let boolean = true; 

//      Undefined (not assigned any value)
      let undefinedVar; 

//   Null (intentional absence of any value)
let nullVar = null; 

   // BigInt (for very large integers beyond Number.MAX_SAFE_INTEGER)
      let bigIntVar = BigInt("1111111111111111111111111111111111111111111");

// Symbol (unique and immutable primitive value)
let symbolVar = Symbol("unique");


// ==============================
// Non-Primitive (Reference) Types
// ==============================

// Array
let arrayVar = [1, 2, 3, 4, 5];

// Object
let objectVar = {
    key: "value"
};

// Function
  let functionVar = function() {
    return "I am a function";
};

// More Complex Object
let person = {
    name: "Raj",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "gaming", "gym"]
};


//output primitive
console.log("Number:", number);
console.log("String:", string);
  console.log("Boolean:", boolean);
   console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
      console.log("BigInt:", bigIntVar);
console.log("Symbol:", symbolVar);





  console.log("Array:", arrayVar);
console.log("Object:", objectVar);
    console.log("Function Output:", functionVar());
 console.log("Person Object:", person);

