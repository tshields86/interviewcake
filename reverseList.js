/* https://www.interviewcake.com/question/javascript/reverse-linked-list */

/*
Value:     1   ->    2   ->    3
Next:      2         3         null

           3   ->    2   ->    1
*/


const reverseList = head => {
  let prev = null; // null 1  2   3
  let node = head; // 1    2  3   null

  while (node) {
    const next = node.next; // 2  3   null
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};