/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(strr) {
  let str = strr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const n = str.length;
  let i=0, j=n-1;

  while(i<j) {
    if(str[i] === str[j]) {
      i++;
      j--;
    }
    else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
