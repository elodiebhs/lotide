const assertEqual = require('./assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);




function tail (tailArray){
    return tailArray.slice(1); 
  }

  const result = tail(["Hello", "Lighthouse", "Labs"]);

  //assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

  module.exports = tail;