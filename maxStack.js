/* https://www.interviewcake.com/question/javascript/largest-stack */

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

// class MaxStack extends Stack {
//   constructor() {
//     super();
//   }

//   push(item) {
//     const maxItem = this.isEmpty()
//       ? item
//       : Math.max(item, this.getMax());
//     super.push([item, maxItem]);
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     const [item] = super.pop();
//     return item;
//   }

//   getMax() {
//     if (this.isEmpty()) return null;
//     const [, maxItem] = super.peek();
//     return maxItem;
//   }
// }

class MaxStack {
  constructor() {
    this.items = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    this.items.push(item);
    if (this.maxStack.isEmpty() || item >= this.maxStack.peek()) {
      this.maxStack.push(item);
    }
  }

  pop() {
    if (this.items.isEmpty()) return null;
    const item = this.items.pop();
    if (item === this.maxStack.peek()) {
      this.maxStack.pop();
    }
    return item;
  }

  getMax() {
    if (this.items.isEmpty()) return null;
    return this.maxStack.peek();
  }
}
