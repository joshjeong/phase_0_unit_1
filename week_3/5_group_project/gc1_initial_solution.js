// As person 3, this is my solution for my section:
var sum= function(arr) {
	var total= 0;
	for(var i=0; i < arr.length; i++) {
		total+= arr[i];
	}
	return total;
}

var mean= function(arr) {
	var arraySum= sum(arr);
	return (arraySum/arr.length);
}

var median= function(arr) {
	var sortedArray= arr.sort;
	if (sortedArray%2==0) {
		return (arr[arr.length/2] + arr[(arr.length+2)/2])/2;
	}
	else	
		return arr[(arr.length+1)/2];
}

//After our group worked through the code this is our perfectly passing solution:

function sum (arr) {
  var total = 0;
  for(var i=0; i < arr.length; i++) {
    total+= arr[i];
  }
  return total;
}


function mean (arr) {
  var arraySum= sum(arr);
  return (arraySum/arr.length);
}

function median (arr) {
  var sortedArray= arr.sort();
  if (sortedArray.length%2===0) {
    return (((sortedArray[sortedArray.length/2])+(sortedArray[(sortedArray.length-2)/2]))/2)
  }
  else  {
    return sortedArray[(sortedArray.length-1)/2];
}
}


// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

"group.js" 98L, 1959C

// Reflection
// What parts of your strategy worked? What problems did you face?
// 	- We were able to communicate with each other very well. We faced a hiccup with our median code, but we 
// 	caught it and were able to fix it.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// 	- My section was converting the pseudo to code which wasn't too difficult
// Did you learn any new skills or tricks?
// 	- None
// How confident are you with each of the learning objectives?
// 	- Ok
// Which parts of the challenge did you enjoy?
// 	- Working as a group to complete a challenge.
// Which parts of the challenge did you find tedious?
// 	- None
// What was this experience like?
// 	- It was different. Taking someone's work where they left off was a fun task.
// Was your group successful in passing the tests?
// 	- After we fixed our median error, we were able to pass the test. 
// What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
// 	- That is helpful/important to plan out your strategy before diving in and checking work after.
