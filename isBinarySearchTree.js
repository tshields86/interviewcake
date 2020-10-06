/* https://www.interviewcake.com/question/javascript/bst-checker */

/* 
        10
    5        15
  1   6   11    20
*/

const isBinarySearchTree = node => {
  const stack = [[node, -Infinity, Infinity]];

  while (stack.length) {
    const [{ value, left, right }, min, max] = stack.pop();

    if (value < min || value > max) return false;
  
    if (right) stack.push([right, value, max]);
    if (left) stack.push([left, min, value]);
  }

  return true;
};