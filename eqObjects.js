const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }
};

// TEST CODE
assertEqual("salut" , "Bootcamp");
assertEqual(1, 1);


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
//worked with Elodie and Brody
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  console.log(object1Keys);
  console.log(object2Keys);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
      if (!eqArrays(object1Keys, object2Keys)) {
        return false;
      } else {
        if (object1Keys !== object2Keys) {
          return false;
        }
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


//code from Sam

const eqObjects = function(object1, object2) {
  let sortedFirstKeys = Object.keys(object1).sort(); // refer to the key of the object that was passed and sort it .
  let sortedSecondKeys = Object.keys(object2).sort();

  if (sortedFirstKeys.length !== sortedSecondKeys.length) { return false; }; // comparing length // technically we could delete this line, no need
  if (!eqArrays(sortedFirstKeys, sortedSecondKeys)) { return false; }; // eq array compare arrays

  for (let i = 0; i < sortedFirstKeys.length; i++) { //at this point we know they are same length and equal

    if (Array.isArray(object1[sortedFirstKeys[i]]) && Array.isArray(object2[sortedSecondKeys[i]])) {
      if (!eqArrays(object1[sortedFirstKeys[i]], object2[sortedSecondKeys[i]])) { return false; };
    } else if (object1[sortedFirstKeys[i]] !== object2[sortedSecondKeys[i]]) { 
      return false; // we comparing the value from obj 1 and 2 
    }

  }

  return true;
};