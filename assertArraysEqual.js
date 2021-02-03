function eqArrays(array1, array2){
  if(array1.length !== array2.length) {
    return "These are not the same length";
}
for(var i = 0; i <= array1.length; i++) {
  if(array1[i] !== array2[i]) {
      return false;
  }
}
return true;
}

function assertArraysEqual(arr1, arr2){
  console.log("message")
}