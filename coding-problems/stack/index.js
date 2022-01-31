class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  push(item) {
    this.items.push(item);
  }

  getTop() {
    return this.items[0] ?? null;
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return !this.items.length;
  }
}

module.exports = Stack;
