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



function head (numArray){
  return numArray[0];
  }
  let result = head([5,6,7]);
  assertEqual(result, 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");