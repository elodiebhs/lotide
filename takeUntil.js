//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {  
  // we need a loop to go through the array
let result = [];

  for (let i = 0; i < array.length; i++){
    let item = array[i];
    if(callback(item)){  
      break
    }
   result.push(item)

  }
  return result
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // x => x <0 is the call back function - it's checking if x < 0 
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual ([ 1, 2, 5, 7, 2 ],results1)
assertArraysEqual ([ "I've", 'been', 'to', 'Hollywood' ],results2)

//---------------

function assertArraysEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)){
    console.log("yay")
  } else {
    console.log("nope")
  }
};

//---------

function eqArrays(array1, array2){
  if(array1.length !== array2.length) {
    return false;
}
for(var i = 0; i < array1.length; i++) {
  if(array1[i] !== array2[i]) {
      return false;
  }
}
return true;
};