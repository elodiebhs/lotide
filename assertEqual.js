const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }
};

// TEST CODE
//assertEqual("salut" , "Bootcamp"); // dont' need anymore beacause we are testing with chai and mocha
//assertEqual(1, 1);



module.exports = assertEqual;