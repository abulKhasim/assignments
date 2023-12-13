/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans = 0;

  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  for(let i=0; i<str.length; i++) {
    if(vowels.has(str[i].toLowerCase())) ans++;
  }

  // for(let i=0; i<str.length; i++) {
  //   if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U' ) {
  //     ans++;
  //   }
  // }

  return ans;
}

module.exports = countVowels;