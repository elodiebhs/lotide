const assertEqual = require('./assertEqual');

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

/*eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
/*
array1[0] !== array2[0]
"1" !== "1"
array1[1] !== array2[1]
"2"! = "2"
array1[2] !== array2[2]
"3" !== 3
*/

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //assertEqual (true, true)


module.exports = eqArrays;