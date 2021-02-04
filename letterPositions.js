//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const letterCount = {};
  
  for (const index in sentence) { // for in loop same that the normal for loop (c style) !== for of loop give us the elements in the loop

  const letter = sentence[index]  //[sentence comes from the in loop]
    if(letter !== " "){
      if(letterCount[letter]){
        //if (letterCount ["l"]) // undifined because the key l doesn't exist yet // result is a falsy value
        letterCount[letter].push(parseInt(index))  //parsInt will transfer from a string to a number
      } else {
        // letterCount["l"]= 0
        letterCount[letter] = [parseInt(index)]
      }
    }
    
  }
 
  return letterCount;
  
};

// after firts loop : "l": [0]

const result = letterPositions("lighthouse in the house")

// Previsous function
function assertArraysEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)){
    console.log("yay")
  } else {
    console.log("nope")
  }
};

//Previous function
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

assertArraysEqual (result["h"],[3,5,15,18])

//other tests : 
/* assertArraysEqual(testObj.l, [0]);
assertArraysEqual(testObj.i, [1, 11]);
assertArraysEqual(testObj.g, [2]);
assertArraysEqual(testObj.h, [3, 5, 15, 18]);
assertArraysEqual(testObj.t, [4, 14]);
assertArraysEqual(testObj.o, [6, 19]);
assertArraysEqual(testObj.u, [7, 20]);
assertArraysEqual(testObj.s, [8, 21]);
assertArraysEqual(testObj.e, [9, 16, 22]);
assertArraysEqual(testObj.n, [12]);
