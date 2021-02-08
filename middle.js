const eqArrays = require('./eqArrays');
  //test comment

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


const assertArraysEqual = require('./assertArraysEqual');

//test

assertArraysEqual ([1, 2 ,3],[1, 2 , 3])


//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// something to do with if statement. if arr is even retunr 2 number in the middle of not retunr 1 number in the middle
// 1 figure out if the length of the array is odd or not 

function middle (array){
  
  let middle = [];
  // if the array has less than 3 elements, return an empty array
  if (array.length < 3) {
    return middle;
  }
  let isEven = array.length % 2 === 0;
  // if the length is even, grab the 2 middle elements
  if (isEven) {
    middle = (array.slice((array.length / 2) - 1, (array.length / 2) + 1));
  } else { // is the length is odd, just grab the middle element
    middle.push(array[Math.floor(array.length / 2)]);
  }
  return middle;
};

module.exports = middle;
 /* 
  middle([1, 2, 3]) // => [2]
  middle([1, 2, 3, 4, 5]) // => [3]
  middle([1, 2, 3, 4, 5, 6]) 

  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);

  */