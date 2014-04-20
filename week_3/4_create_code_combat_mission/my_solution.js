// I worked with Matt on this challenge

/* Instructions:
1. Define local variables in JavaScript
2. Create, add properties to, delete properties from, and access values from JavaScript Object literals


/* Your mission description:



// Pseudocode
// Define character with properties age, name, and gender.
// Quickly add new characteristics such hair color, eye color, and weapon.
// Delete gender characteristics.
*/
// Initial Code

var characterList= []

function character(age, name, gender) {
  this.age= age;
  this.name= name;
  this.gender= gender;
}


var hulk= new character( 35, "Hulk", "male")
characterList.push(hulk)
var captainAmerica= new character( 103, "Captain America", "male")
characterList.push(captainAmerica)
var superMan= new character( 41, "Super Man", "male")
characterList.push(superMan)



superMan.hairColor= "brown";
superMan.eyeColor= "brown";
hulk.weapon= "Hulk Smash";
delete superMan.gender;
console.log(superMan)
    



// Reflection
// 
// 
// 
// 
// 
// 
// 
// 
