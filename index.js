function isPalindrome(word) {
  function reverse(word) {
    return word
      .split("")
      .reverse()
      .join("");
  }
  return word === reverse(word) ? true : false;
}
/* 
  Add your pseudocode here
*/
/**
 * 1. Create an array of the word
 * 2. Reverse the array
 * 3. Create a string from the reversed array
 * 4. Compare the reversed string to the original string
 */

/*
  Add written explanation of your solution here
*/
/**
 * The word is a palindrome if the reversed word is the same as the original word.
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
