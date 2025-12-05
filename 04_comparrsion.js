// console.log("Comparison Operators in JavaScript");

// // Equality Operators
// console.log("5 == '5':", 5 == '5'); // true (loose equality)
// console.log("5 === '5':", 5 === '5'); // false (strict equality)

// // Inequality Operators
// console.log("5 != '5':", 5 != '5'); // false (loose inequality)
// console.log("5 !== '5':", 5 !== '5'); // true (strict inequality)

// // Greater than and Less than
// console.log("10 > 5:", 10 > 5); // true
// console.log("10 < 5:", 10 < 5); // false
// console.log("10 >= 10:", 10 >= 10); // true
// console.log("10 <= 9:", 10 <= 9); // false

// // Comparing different types
// console.log("'apple' > 'banana':", 'apple' > 'banana'); // false
// console.log("'2' < 3:", '2' < 3); // true (string '2' is converted to number 2)
// console.log("null == undefined:", null == undefined); // true
// console.log("null === undefined:", null === undefined); // false

// // Special cases
// console.log("NaN == NaN:", NaN == NaN); // false
// console.log("NaN === NaN:", NaN === NaN); // false
// console.log("0 == false:", 0 == false); // true
// console.log("0 === false:", 0 === false); // false

// // Summary
// console.log("Use '===' and '!==' for strict comparisons to avoid type coercion issues.");   


// console.log(null > 0); //
// console.log(null >= 0);
// console.log(null == 0);

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);

console.log(NaN == NaN); // comparison operator
console.log(NaN === NaN); // strict equality operator
console.log(Number.isNaN(NaN)); // function to check if value is NaN
console.log(Number.isNaN("Hello")); // false