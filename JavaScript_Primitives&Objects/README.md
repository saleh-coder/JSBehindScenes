# JavaScript Primitives vs. Objects

This repository contains examples demonstrating the differences between primitive values and reference objects in JavaScript.

## Overview

JavaScript has two main types of data:

- **Primitive Values**: Simple data types such as numbers, strings, and booleans.
- **Reference Objects**: More complex data types such as objects, arrays, and functions.

Understanding how these types are stored in memory is crucial for effective programming in JavaScript.

## Code Explanation

### Primitives

In the first part of the code, we work with primitive values:

1. We declare a variable `age` and set it to `30`.
2. We create another variable `oldAge` that copies the value of `age`.
3. When we update `age` to `31`, `oldAge` remains `30` because primitive values are stored by value, not by reference.

### Objects

In the second part, we work with objects:

1. We create an object `me` with properties `name` and `age`.
2. We copy the object reference to a new variable `friend`.
3. When we change `friend.age` to `27`, the `age` property of the `me` object also changes because both variables point to the same object in memory.

## Conclusion

This code illustrates the key differences between how JavaScript handles primitive values and objects in memory. Understanding these concepts helps prevent common programming errors related to variable assignments and data manipulation.
