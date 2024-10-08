// Jonas object with a property and methods
const Jonas = {
  firstName: "Jonas",
  // Regular method that greets the user
  greet: function () {
    console.log(`Hey, ${this.firstName}`); // The keyword 'this' refers to the Jonas object
  },
  // Method that calls an arrow function, illustrating the 'this' keyword trap
  greetWithArrow: () => {
    console.log(`Hey, ${this.firstName}`); // Here 'this' refers to the global scope, not the Jonas object
  },
  // Method that calculates age and checks if the person is a millennial
  calcAge: function (birthYear) {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Age: ${age}`);

    // Calls the isMillennial function inside calcAge
    this.isMillennial(); // Here 'this' refers to the Jonas object
  },
  // Regular function to check if the person is a millennial
  isMillennial: function () {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    console.log(currentYear > 1981 && currentYear < 1997); // Checks if the year is between 1981 and 1996
  },
};

// Call the methods to show the difference
Jonas.greet(); // Expected output: "Hey, Jonas"
Jonas.greetWithArrow(); // Output: "Hey, undefined"

// Calculate age and check if he is a millennial
Jonas.calcAge(1990); // Output: "Age: X" and "true" if Jonas is a millennial
