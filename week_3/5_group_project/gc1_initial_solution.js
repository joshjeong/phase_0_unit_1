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
