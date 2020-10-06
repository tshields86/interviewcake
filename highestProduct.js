/* https://www.interviewcake.com/question/javascript/highest-product-of-3 */

const highestProduct = integers => {
  const [first, second, third] = integers;

  let highest = Math.max(first, second);
  let lowest = Math.max(first, second);
  
  let highestOfTwo = first * second;
  let lowestOfTwo = first * second;

  let highestOfThree = first * second * third;

  for (let i = 2; i < integers.length; i++) {
    const current = integers[i];

    highestOfThree = Math.max(
      highestOfThree,
      current * highestOfTwo,
      current * lowestOfTwo
    );

    highestOfTwo = Math.max(
      highestOfTwo,
      current * highest,
      current * lowest
    );

    lowestOfTwo = Math.max(
      lowestOfTwo,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);

    lowest = Math.min(lowest, current);
  }

  return highestOfThree;
};

console.log(highestProduct([2, 5, 8, 1, 4, 9])); // 360
console.log(highestProduct([1, 10, -5, 1, -100])); // 5000
console.log(highestProduct([4, 2, 1])); // 8