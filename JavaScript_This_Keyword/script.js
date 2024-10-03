"use strict"; // Use strict mode to ensure consistent behavior of `this`

// 1. `this` in Methods (Function Attached to an Object)
// When a function is called as a method of an object, `this` refers to the object itself.
const jonas = {
  year: 1989,
  calcAge: function () {
    console.log(2024 - this.year); // 'this' points to the 'jonas' object
  },
};

// Calling the function as a method of 'jonas'
jonas.calcAge(); // Output: 35, where 'this.year' is 'jonas.year'

// 2. `this` in Regular Function Calls
// When a function is called normally (not as a method of an object), `this` will be 'undefined' in strict mode.
function showThis() {
  console.log(this); // 'undefined' in strict mode, 'window' otherwise
}

showThis(); // Output: undefined

// 3. `this` in Arrow Functions
// Arrow functions do not get their own `this`; instead, they inherit `this` from the surrounding lexical context (parent function or global scope).
const jonasArrow = {
  year: 1989,
  greet: () => {
    console.log(this.year); // 'this' does not refer to 'jonasArrow', but instead to the global scope
  },
};

jonasArrow.greet(); // Output: undefined (in strict mode)

// Since the arrow function does not have its own `this`, it inherits from the scope where it was defined.
// Here, `this` refers to the global scope, and `this.year` results in 'undefined'.

// 4. `this` in Event Handlers
// When a function is used as an event listener, the `this` keyword points to the DOM element that the handler is attached to.
const button = document.querySelector(".my-button");
button.addEventListener("click", function () {
  console.log(this); // 'this' points to the button element that was clicked
});

// In this case, `this` refers to the `button` element that received the click event.

// ---------------------------------------------------
// Summary of Previous Examples

// - Method of Object: `this` points to the object that called the method.
// - Regular Function (strict mode): `this` is `undefined`.
// - Arrow Function: `this` is inherited from the surrounding lexical scope.
// - Event Listener: `this` points to the DOM element that received the event.

// Other Ways of Calling Functions (to be covered later):
// There are other ways to call functions, such as with the `new` keyword, or using the `call`, `apply`, and `bind` methods, which also affect the value of `this`.
