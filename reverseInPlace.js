/* https://www.interviewcake.com/question/javascript/reverse-string-in-place */

const reverseInPlace = chars => {
  const half = Math.floor((chars.length) / 2)
  for (let i = 0; i < half; i++) {
    const opposite = chars.length - 1 - i;
    [chars[i], chars[opposite]] = [chars[opposite], chars[i]];
  }
  return chars;
};

console.log(reverseInPlace(['a', 'b', 'c']));
console.log(reverseInPlace(['a', 'b', 'c', 'd']));
console.log(reverseInPlace(['a']));
console.log(reverseInPlace([]));