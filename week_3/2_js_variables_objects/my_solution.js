// I paired [by myself] on this challenge.




// Pseudocode
/*
1. Create variable secretNumber and set it to 7
2. Create variable password and set it to "just open the door"
3. Create variable allowedIn and set it to false
4. Create an array called members and have first member be John
5. Fourth member in array should be Mary

*/

// __________________________________________
// Write your code below.
var secretNumber= 7
var password= "just open the door"
var allowedIn= false
var members= ["John", "Jack", "James", "Mary"]






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
Code is already simple and D.R.Y.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
What parts of your strategy worked? What problems did you face?
  - Running the driver code first to see what the errors were and what was needed was crucial.
What questions did you have while coding? What resources did you find to help you answer them?
  - No questions, exercise was straight forward.
What concepts are you having trouble with, or did you just figure something out? If so, what?
  - I refreshed how to create variables in JavaScript by completing codeacademy.
Did you learn any new skills or tricks?
  - By looking at the driver code I learned assert() and typeof.
How confident are you with each of the learning objectives?
  - Fairly comfortable
Which parts of the challenge did you enjoy?
  - First time using a driver code. I thought it was a cool way of doing an exercise.
Which parts of the challenge did you find tedious?
  - None
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

