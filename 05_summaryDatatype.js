// primative data types in javascript
// 7 type of cTEGORIES

// (CALL BY VALUE) => NOT REFERENCE => ONLY COPY OF VALUE IS PASSED

// String, Number, Boolean, Null, Undefined, Symbol(value ko unique banata hai), BigInt(large integers ke liye)

// REFERENCE data types (Non primative data types)
// (CALL BY REFERENCE) => MEMORY ADDRESS PASSED

// Object, Array, Function, Date, RegExp, etc.

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2); // false, because each symbol is unique

// BigInt
const bigIntNum = BigInt(1234567890123456789012345678901234567890);
console.log(bigIntNum); // 1234567890123456789012345678901234567890n

// Example of Null and Undefined
let a = null;
let b;
console.log(a); // null
console.log(b); // undefined

// Example of String, Number, Boolean
let str = "Hello, World!";
let num = 42;
let bool = true;

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean

// Example of Object
let obj = {
    name: "Alice",
    age: 30
};
console.log(typeof obj); // object

// Example of Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

// Example of Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // function

// Example of Date
let date = new Date();
console.log(typeof date); // object

// Example of RegExp
let regex = /ab+c/;
console.log(typeof regex); // object

// Summary
console.log("Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt");
console.log("Reference Data Types: Object, Array, Function, Date, RegExp");

// Additional examples for NaN comparisons
console.log(NaN == NaN); // comparison operator
console.log(NaN === NaN); // strict equality operator
console.log(Number.isNaN(NaN)); // function to check if value is NaN
console.log(Number.isNaN("Hello")); // false


// function (){} // function definition

// funcation expression
const myFunc = function(){};

// arrow function
const myArrowFunc = () => {};

// funcation as object method
const myObj = {
    myMethod: function() {}
};
console.log(typeof myObj.myMethod); // function

// funcation constructor
const myFuncConstructor = new Function('a', 'b', 'return a + b;');
console.log(typeof myFuncConstructor); // function
