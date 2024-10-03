"use strict";

///////////////////////
// GLOBAL SCOPE VARIABLES AND FUNCTIONS
const firstName = "Lisa"; // Global variable

///////////////////////
// FUNCTION SCOPING EXAMPLE
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  ///////////////////////
  // INNER FUNCTION WITH ACCESS TO PARENT SCOPE
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    ///////////////////////
    // BLOCK SCOPING EXAMPLE WITH `if` STATEMENT
    if (birthYear >= 1982 && birthYear <= 1996) {
      var millenial = true; // Function-scoped

      // Create NEW variable with same name as outer scope's variable
      const firstName = "Matheus";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      // Function scoped to this block in 'strict mode'
      function add(a, b) {
        return a + b;
      }
    }

    // Trying to access block-scoped variables and function outside of the block
    // console.log(str); // ReferenceError: str is not defined
    console.log(millenial); // Works because 'millenial' is function-scoped
    // console.log(add(2, 3)); // ReferenceError: add is not defined in strict mode

    console.log(output); // Outputs "NEW OUTPUT!"
  }

  printAge();
  return age;
}

calcAge(1991);
