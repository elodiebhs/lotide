const eqArrays = require('./eqArrays');
  //test comment

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
function assertArraysEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)){
    console.log("yay")
  } else {
    console.log("nope")
  }
};

//assertArraysEqual ([1, 2 ,3],[1, 2 , 3])

module.exports = assertArraysEqual;
