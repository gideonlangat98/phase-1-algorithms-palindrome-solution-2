function isPalindrome(word) {
  // Write your algorithm here
  for (let firstCharacter = 0; firstCharacter < word.length / 2; firstCharacter ++) {

     const lastCharacter = word.length - 1 - firstCharacter;
     if (word[firstCharacter] !== word[lastCharacter]) {
      return false;
    }
   }
   return true
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  This palindrome solution has function that compares
  the first letter from index[0] and returns true 
  if the argument is a palindrome that is 
  if it reads the same when reversed and vice versa.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
