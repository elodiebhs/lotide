const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }
};

// TEST CODE
//assertEqual("salut" , "Bootcamp");
//assertEqual(1, 1);

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

function countLetters(string) {
  const letterCount = {};

  for (const letter of string) {
  
    if(letter !== " "){
      if(letterCount[letter]){
        letterCount[letter] += 1
      } else {
        letterCount[letter] = 1
      }
    }
    
  }
  return letterCount;

}

console.log(countLetters("lighthouse in the house"))