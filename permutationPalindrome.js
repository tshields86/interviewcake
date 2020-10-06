/* https://www.interviewcake.com/question/javascript/permutation-palindrome */

const permutationPalindrome = word => {
  const unpairs = new Set();

  for (const char of word) {
    if (unpairs.has(char)) unpairs.delete(char);
    else unpairs.add(char);
  }

  return unpairs.size <= 1;
};

console.log(permutationPalindrome('civic')); // true
console.log(permutationPalindrome('ivicc')); // true
console.log(permutationPalindrome('civil')); // false
console.log(permutationPalindrome('livci')); // false
console.log(permutationPalindrome('a')); // true
console.log(permutationPalindrome('')); // true