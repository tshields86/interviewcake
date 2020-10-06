/* https://www.interviewcake.com/question/javascript/delete-node */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const deleteNode = node => {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
};

/*
  a ->(b)-> c -> d
  a -> c -> d

  a -> b -> c ->(d)

*/

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);