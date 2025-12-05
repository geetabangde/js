// 06_memory.js
//memory allocation 
// JavaScript Memory Allocation – Two Types

// Memory ke 2 major parts:
// A) Stack Memory (Primitive values stored)

// Stack me store hote hain: (copy or varible ke andar value stored hoti hai)

// number

// string

// boolean

// null

// undefined

// symbol

// bigint

// B) Heap Memory (Objects stored) (original value ka reference types stored)

// Heap me store hota hai:

// object

// array

// function

// class instance

// ➡️ Large / dynamic size data
// ➡️ Slower than stack

// Example of Stack Memory

// Memory Allocation Example
let a = 10;       // stack
let b = a;        // stack, copy value

let obj1 = { x: 5 }; // heap
let obj2 = obj1;     // reference copied (same object)

// Modifying obj2 will affect obj1

//heap me dono same object ko point kar rahe hain
userOne = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
}
userTwo = userOne; // reference copied

userTwo.name = "Bob"; // modifies userOne as well
userTwo.address.city = "New City"; // modifies userOne as well

console.log(userOne.name); // Output: "Bob"
console.log(userOne.address.city); // Output: "New City"
console.log(userTwo);


