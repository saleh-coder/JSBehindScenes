"use strict";

// Example 1: Hoisting with Functions and Variables

// Example of Hoisting with Functions
console.log(myFunction()); // "Hello, world!"
function myFunction() {
  return "Hello, world!";
}

// Example of Hoisting with var
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

// Example of Hoisting with let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // 10 (won't be executed due to the error above)

// Example 2: Hoisting with Functions and Arrow Functions

// Declared function
console.log(regularFunction()); // "This is a regular function!"
function regularFunction() {
  return "This is a regular function!";
}

// Expressed function (hoisted to undefined)
console.log(arrowFunction()); // TypeError: arrowFunction is not a function
var arrowFunction = () => {
  return "This is an arrow function!";
};

// Defining the arrowFunction
arrowFunction = () => {
  return "This is an arrow function!";
};
console.log(arrowFunction()); // "This is an arrow function!"

// Example 3: Temporal Dead Zone (TDZ)

// Example of Temporal Dead Zone
{
  console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
  const myConst = 15;
  console.log(myConst); // 15 (won't be executed due to the error above)
}

// Example with var (without TDZ)
{
  console.log(myVar); // undefined
  var myVar = 20;
  console.log(myVar); // 20
}

// Example 4: Hoisting and the difference between var, let, and const

// Practical example of hoisting
function testHoisting() {
  console.log(a); // undefined
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization

  var a = 1; // Hoisted to top with value undefined
  let b = 2; // Not hoisted, TDZ applies
  const c = 3; // Not hoisted, TDZ applies

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

testHoisting();

// Explanation of the Examples:
// Example 1: Shows how functions are hoisted and can be called before being declared.
// The variable myVar is hoisted but has the value undefined until it is initialized.
// On the other hand, myLet causes an error if accessed before being declared due to TDZ.

// Example 2: Demonstrates the difference between declared functions and function expressions (including arrow functions).
// Declared functions can be called before their definition, while function expressions cannot.

// Example 3: Illustrates the Temporal Dead Zone with const and how var variables behave without TDZ.

// Example 4: Shows how var, let, and const behave during execution,
// highlighting the concept of hoisting and the Temporal Dead Zone.
