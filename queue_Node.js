class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) return null;

    const firstNode = this.head;
    this.head = firstNode.next;
    firstNode.next = null;
    --this.length;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode;
  }
}

const queue = new Queue();
queue.enqueue(5).enqueue(10).enqueue(15).enqueue(20);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());
console.log(JSON.stringify(queue));
