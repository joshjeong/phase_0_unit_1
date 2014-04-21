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
What parts of your strategy worked? What problems did you face?
    - I had some trouble understanding the directions. After doing code combat, I initially though it had to be 
    extremely advanced.
What questions did you have while coding? What resources did you find to help you answer them?
    - I didn't know how to set up the constructor but it was later clarified after doing the GPS.
What concepts are you having trouble with, or did you just figure something out? If so, what?
    - I'm still having a little trouble with Objects but nothing that can't be answered after some additional reading.
Did you learn any new skills or tricks?
    - .push
How confident are you with each of the learning objectives?
    - Meh, as I mentioned before. I need to spend more time on Objects
Which parts of the challenge did you enjoy?
    - I did this in a pairing session which are always fun.
Which parts of the challenge did you find tedious?
    - None.
