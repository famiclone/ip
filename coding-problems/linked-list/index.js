class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list data structure class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  setFirst(data) {
    this.head = new ListNode(data);
  }

  setLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new ListNode(data);
      return false;
    }

    this.setFirst(data);
  }

  size() {
    let result = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      result++;
    }

    return result;
  }

  getAt(index) {
    let node = this.head;
    let count = 0;

    while (count < index) {
      node = node.next;
      count++;
    }

    return node;
  }

  insertAt(index, data) {
    if (index > this.size() || index < 1) {
      return false;
    }

    if (index === 0) {
      this.setFirst(data);
    }

    const node = new ListNode(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++; //?
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }

  clear() {
    this.head = null;
  }
  getLast() {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = LinkedList;
