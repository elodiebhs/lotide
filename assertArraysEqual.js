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
};
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
