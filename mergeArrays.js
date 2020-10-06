/* https://www.interviewcake.com/question/javascript/merge-sorted-arrays */

const mergeArrays = (a, b) => {
  const merged = [];

  for (
    let i = 0, ai = 0, bi = 0;
    ai < a.length || bi < b.length;
    i++
  ) {
    if (
      bi >= b.length ||
      (ai < a.length && a[ai] <= b[bi])
    ) {
      merged[i] = a[ai];
      ai++
    } else {
      merged[i] = b[bi];
      bi++
    }
  }

  return merged;
};

console.log(mergeArrays(
  [3, 4, 6, 10, 11, 15],
  [1, 5, 8, 12, 14, 19]
));

console.log(mergeArrays(
  [3, 4, 6, 10, 11, 15, 16],
  [1, 5, 8, 12, 14, 19]
));

console.log(mergeArrays(
  [3, 4, 6, 10, 11, 15],
  [1, 5, 8, 12, 14, 19, 20]
));

console.log(mergeArrays(
  [],
  [1, 5, 8, 12, 14, 19]
));

console.log(mergeArrays(
  [3, 4, 6, 10, 11, 15],
  []
));

console.log(mergeArrays(
  [],
  []
));
