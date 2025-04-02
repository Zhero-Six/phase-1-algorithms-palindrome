function isPalindrome(str) {
  // Get string length
  const len = str.length;
  
  // Loop through half the string
  for (let i = 0; i < Math.floor(len / 2); i++) {
      // Compare characters from start and end moving inward
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }
  // If we make it through the loop, it's a palindrome
  return true;
}

// 5. Make It Clean and Readable (already fairly clean, adding comments):
function isPalindrome(str) {
  const len = str.length; // Store string length for readability
  
  // Only need to check half the string since we're comparing both ends
  for (let i = 0; i < Math.floor(len / 2); i++) {
      // If characters at opposite ends don't match, not a palindrome
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }
  return true; // All characters matched
}

// 6. Optimize:
// This solution is already O(n/2) time complexity, which simplifies to O(n)
// Space complexity is O(1) as we only use a few variables
// Could alternatively reverse string and compare, but that would use O(n) space

// My additional test cases
console.log("Testing 'mom':", isPalindrome("mom"));      // true
console.log("Testing 'hello':", isPalindrome("hello"));  // false
console.log("Testing 'deked':", isPalindrome("deked"));  // true
console.log("Testing 'abcd':", isPalindrome("abcd"));    // false

// Export for testing
module.exports = isPalindrome;

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
