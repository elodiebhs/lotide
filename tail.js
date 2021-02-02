const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);




function tail (tailArray){
    return tailArray.slice(1); 
  }

  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!