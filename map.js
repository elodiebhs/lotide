
//copy
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

//copy
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅️✅️✅️ Assertion Passed: ${array1} === ${array2} ✨️✨️`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2} 😩️`);
  }
};

//-------------------------------------------------------
//The map function will return a new array based on the results of the callback function.

function map (arrToMap, callbackfun){
let result = [];
for(let element of arrToMap){
  result.push(callbackfun(element));
}
return result;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);


assertArraysEqual ([1, 2 ,3],[1, 2 , 3])


