/* https://www.interviewcake.com/question/javascript/linked-list-cycles */

/*
1 -> 2 -> 3
s    f

1 -> 2 -> 1 -> 2 ...


*/

const containsCycle = node => {
  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

// const containsCycle = node => {
//   const prevNodes = new Set();

//   while (node) {
//     if (prevNodes.has(node)) return true;
//     prevNodes.add(node);
//     node = node.next;
//   }

//   return false;
// };