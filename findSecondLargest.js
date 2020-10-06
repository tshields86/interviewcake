/* https://www.interviewcake.com/question/javascript/second-largest-item-in-bst */


/* 
              10
          5         15
        4   6     12   30
                      18
                        19

              50
          30      70
        10  40  60  80

*/

// const findSecondLargest = node => {
//   const stack = [];
//   const sorted = [];
//   let current = node;

//   while (current || stack.length) {
//     while (current) {
//       stack.push(current);
//       current = current.right;
//     }

//     current = stack.pop();
//     sorted.push(current.value);
//     if (sorted.length > 1) return sorted[1];
    
//     current = current.left;
//   }

//   return null;
// };

const findLargest = node => {
  while (node.right) {
    node = node.right;
  }
  return node.value;
};

const findSecondLargest = node => {
  while (node) {
    if (node.left && !node.right) {
      return findLargest(node.left);
    }

    if (
      node.right &&
      !node.right.right &&
      !node.right.left
    ) return node.value;

    node = node.right;
  }
};