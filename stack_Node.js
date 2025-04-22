class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
    } else {
      let tempNode = this.head;
      newNode.next = tempNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return null;
    else {
      let firstNode = this.head;
      let newFirstNode = firstNode.next;
      firstNode.next = null;
      this.head = newFirstNode;
      this.length--;
      return firstNode;
    }
  }
}

const stack = new Stack();
stack.push(5).push(10).push(15).push(20);
console.log(JSON.stringify(stack));
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(JSON.stringify(stack.pop()));
