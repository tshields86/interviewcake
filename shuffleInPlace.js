/* https://www.interviewcake.com/question/javascript/shuffle */

const getRandom = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1)) + floor;

const shuffleInPlace = array => {
  if (array.length <= 1) return array;

  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    const random = getRandom(i, length - 1);
    [array[i], array[random]] = [array[random], array[i]];
  }

  return array;
};

console.log(shuffleInPlace([1, 2, 3, 4, 5]))

/* 
[1, 2, 3, 4, 5]  []
[1, 2, 3, 5]    [4]
[1, 3, 5]    [4, 2]
[3, 5]    [4, 2, 1]
[3]    [4, 2, 1, 5]
[]  [4, 2, 1, 5, 3]

[1, 2, 3, 4, 5]

[4* 1, 2, 3, 5]
[4, 2* 1, 3, 5]
[4, 2, 1* 3, 5]
[4, 2, 1, 5* 3]

[4, 2, 1, 5, 3]
 */