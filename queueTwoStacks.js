/* https://www.interviewcake.com/question/javascript/queue-two-stacks */

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }
}

class QueueTwoStacks {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(item) {
    this.enqueueStack.push(item);
  }

  dequeue() {
    this.#shiftStacks();
  
    return this.dequeueStack.pop();
  }

  peek() {
    this.#shiftStacks();

    return this.dequeueStack.peek();
  }

  isEmpty() {
    return enqueueStack.isEmpty() && dequeueStack.isEmpty();
  }

  #shiftStacks = () => {
    if (
      this.enqueueStack.isEmpty() &&
      this.dequeueStack.isEmpty()
    ) return null;
    
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
  }
}

const queue = new QueueTwoStacks();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log({
  enqueueStack: queue.enqueueStack,
  dequeueStack: queue.dequeueStack
})
console.log(queue.dequeue());
console.log(queue.peek());
console.log({
  enqueueStack: queue.enqueueStack,
  dequeueStack: queue.dequeueStack
})