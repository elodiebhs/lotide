//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const letterCount = {};
  
  for (const index in sentence) {
  const letter = sentence[index]
    if(letter !== " "){
      if(letterCount[letter]){
        letterCount[letter].push(parseInt(index))
      } else {
        letterCount[letter] = [parseInt(index)]
      }
    }
    
  }
 
  return letterCount;
};

const result = letterPositions("lighthouse in the house")


function assertArraysEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)){
    console.log("yay")
  } else {
    console.log("nope")
  }
};


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