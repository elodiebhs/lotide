const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')



eqArrays([1, 2, 3], [1, 2, 3]) // => true
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //assertEqual (true, true)cd 