/* https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
const c = new LinkedListNode('c');
const d = new LinkedListNode('d');
const e = new LinkedListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/*
  a   ->    b   ->    c   ->    d   ->    e   ->    null
*/

// const kthToLastNode = (k, head) => {
//   if (k < 1) {
//     throw new Error(`Impossible to find less than first to last node: ${k}`);
//   }

//   let length = 1;
//   let current = head;

//   while (current.next) {
//     current = current.next;
//     length++;
//   }

//   if (k > length) {
//     throw new Error(`k is larger than the length of the linked list: ${k}`);
//   }

//   const kthPosition = length - k;

//   current = head;
//   for (let i = 0; i < kthPosition; i++) {
//     current = current.next;
//   }

//   return current;
// };

const kthToLastNode = (k, head) => {
  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  let left = head;
  let right = head;

  for (let i = 0; i < k - 1; i++) {
    if (!right.next) {
      throw new Error(`k is larger than the length of the linked list: ${k}`);
    }
    right = right.next;
  }

  while (right.next) {
    right = right.next;
    left = left.next;
  }

  return left;
};