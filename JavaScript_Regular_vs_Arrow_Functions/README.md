# Traps of Regular Functions and Arrow Functions

This repository contains a practical example of the differences between regular functions and arrow functions in JavaScript, addressing common traps associated with each type of function.

## Purpose

The purpose of this project is to demonstrate how the `this` keyword behaves differently in regular functions and arrow functions. This is important to avoid common errors that may occur when using each of them.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the `index.js` file using a JavaScript environment (such as Node.js or directly in a browser console).

## Code

The code is contained in the `index.js` file, which defines a `Jonas` object with methods that demonstrate:

- The use of a regular function to greet and access object properties.
- The use of an arrow function that does not have its own `this` keyword, resulting in `undefined`.
- A method that calculates age and a function to check if the user is a millennial.

## Notes

- **`this` Keyword**: In regular functions, `this` refers to the object that called the function. In arrow functions, `this` is inherited from the parent context.
- **Avoiding Traps**: Whenever possible, avoid using arrow functions as object methods to prevent unexpected behaviors.

## Contributions

Feel free to contribute improvements or corrections.
