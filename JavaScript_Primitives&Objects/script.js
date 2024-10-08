"use strict";
// This code demonstrates the difference between primitive values and reference objects in JavaScript

// Example with primitive values
let age = 30; // Declare a primitive variable 'age' and set it to 30
let oldAge = age; // Copy the value of 'age' into 'oldAge'

// Output both values to the console
console.log("Current Age:", age); // Expected output: 30
console.log("Old Age:", oldAge); // Expected output: 30

// Now, let's change the value of 'age'
age = 31; // Update 'age' to 31

// Output both values again
console.log("Updated Current Age:", age); // Expected output: 31
console.log("Old Age after Update:", oldAge); // Expected output: 30

// Example with reference objects
const me = {
  name: "Jonas",
  age: 30,
}; // Create an object 'me' with properties 'name' and 'age'

// Copy the object reference to a new variable
const friend = me; // 'friend' points to the same object as 'me'

// Change the age property of the friend object
friend.age = 27; // Update 'friend's age to 27

// Output both objects to the console
console.log("Friend's Age:", friend.age); // Expected output: 27
console.log("My Age after Friend Update:", me.age); // Expected output: 27

// Explanation:
// Both 'me' and 'friend' refer to the same object in memory.
// Therefore, changing 'friend.age' also changes 'me.age'.
