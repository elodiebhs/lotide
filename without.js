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
    return false;
}
for(var i = 0; i <= array1.length; i++) {
  if(array1[i] !== array2[i]) {
      return false;
  }
}
return true;
}
  //test comment

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


function assertArraysEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)){
    console.log("yay")
  } else {
    console.log("nope")
  }
}
assertArraysEqual ([1, 2 ,3],[1, 2 , 3])

//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  const removed = source.slice(0); // make a copy of the source array so that the original is not modified
  for (let i = 0; i < removed.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (removed[i] === itemsToRemove[j]) {
        removed.splice(i, 1);
        // all elements in the 'removed' array were shifted down one index
        // so the index must be decrimented to avoid skipping an element
        i--;
        break;
      }
    }
  }
  return removed;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]