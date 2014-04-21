// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

 
// rescue mission
// move down x2
// move right x1
// move up x2
// move right x3
// move down x1
// ATTACK
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


// grab the mushroom
// move up
// move right
// mmove left
// move up
// ATTACK
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// drink me
// ATTACK
// move right
// move down
// move up
// move right
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
 
 
 
// taunt the guards
// move right
// bust down door
// move right
// lure guard
// move left x2
// ATTACK
// move right
// get Phoebe
// move right x2
// move up x2
// move right
// lure gards
// move down
// move right
// move up
// move right
this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// it's a trap
// move down x2
// lure ogre
// move up x2
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("what it do!!");
this.moveUp();
this.moveUp();

// taunt
// move up
// lure ogre x4
// move down x3
this.moveUp();
this.say("hey");
this.say("you");
this.say("bark");
this.say("arf");
this.moveDown();
this.moveDown();
this.moveDown();

// cowardly taunt
// move to (40,16)
// move to (62,32)
// taunt
// move to (52,3)
this.moveXY(40,16);
this.moveXY(62,32);
this.say("Hey");
this.moveXY(52,3);

commanding followers
// move to (49, 66)
// move to (60, 63)
// move to (75, 63)
// command army to follow
// move to (60,38)
// attack
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow");
this.moveXY(60,38);
this.say("attack");


// mobile artillery
// move to (30,26)
// attack (46,5)
// move to (49,39)
// attack (67,52)
// attack (60,47)
// attack (48,62)
// attack (48,55)
this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(49,39);
this.attackXY(67,52);
this.attackXY(60,47);
this.attackXY(48,62);
this.attackXY(48,55);
 
 
// What is this referring to? Think programming-wise rather than in the terms of the game.
//  - this is referring to the item selected
// What does the () do in JavaScript?
//  - () calls a method passing a parameter
// What is the point of the semicolons?
//  - ends and seprates statements


// Reflection:
What parts of your strategy worked? What problems did you face?
 - Writing in pseudocode then translating it to JavaScript worked as an efficient strategy. 
What questions did you have while coding? What resources did you find to help you answer them?
 - I had to refresh on JavaScript functiions and syntax. I went back and retook the codeacademy exercises.
What concepts are you having trouble with, or did you just figure something out? If so, what?
 - After refreshing my memory, no questions regarding the Code Combat.
Did you learn any new skills or tricks?
 - I'm new to Javascript so functions are still a little new.
Which parts of the challenge did you enjoy?
- The game helped to understand the conecpt of JavaScript's "this."
Which parts of the challenge did you find tedious?
- Documenting all the pseudo code was a little tedious towards the end.
