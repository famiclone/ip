const LinkedList = require('../linked-list');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element) {
    if (this.list.size() === 0) {
      this.list.setFirst(element);
    } else {
      this.list.setLast(element);
    }
  }
  dequeue() {}
  isEmpty() {}
  getFront() {
    return this.list.getLast();
  }
  size() {
    return this.list.size();
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);

q;

q.getFront(); //?

q.size(); //?

module.exports = Queue;
