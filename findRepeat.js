/* https://www.interviewcake.com/question/javascript/which-appears-twice */

const findRepeat = numbers => {
  const n = numbers.length - 1;
  const sumOfRange = (n * (n + 1)) / 2;
  const sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);

  return sumOfNumbers - sumOfRange;
};