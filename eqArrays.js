const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }
};

// TEST CODE
assertEqual("salut" , "Bootcamp");
assertEqual(1, 1);


//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

function eqArrays(array1, array2){
  if(array1.length !== array2.length) {
    return "These are not the same length";
}
for(var i = 0; i <= array1.length; i++) {
  if(array1[i] !== array2[i]) {
      return false;
  }
}
return true;
}
  

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);