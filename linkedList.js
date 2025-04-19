class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) {
      return "CANNOT POP FROM EMPTY LIST";
    }
    let current = this.head;
    //checking if only one item is present
    if (!current.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }
    while (current.next.next) {
      current = current.next;
    }

    const lastNode = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return lastNode;
  }
  shift() {
    if (!this.head) {
      return "CANNOT SHIFT FROM EMPTY LIST";
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentHead = this.head;
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(pos) {
    if (pos < 0 || this.length < pos) {
      return "ELEMENT DOESNOT EXIST";
    } else {
      let count = 0;
      let current = this.head;
      while (count !== pos) {
        current = current.next;
        count++;
      }
      return current;
    }
  }
  setNewVal(pos, newVal) {
    const currentNode = this.get(pos);

    if (typeof currentNode !== "object") {
      return currentNode;
    }
    currentNode.val = newVal;
    return this;
  }
  insertNewNode(pos, val) {
    let currentNode = this.get(pos);
    if (typeof currentNode !== "object") {
      return currentNode;
    }
    let newNode = new Node(val);
    const nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }
  removeNode(pos) {
    const prevNode = this.get(pos - 1);
    const presentNode = this.get(pos);
    prevNode.next = presentNode.next;
    this.length--;

    return this;
  }
  reverse() {
    if (this.length === 0) {
      return "Cannot reverse empty linked list";
    }
    if (this.length === 1) {
      return this;
    }
    if (this.length === 2) {
      const head = this.head;
      this.head = this.tail;
      this.tail = head;
      return this;
    }
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      let nextNode = currentNode.next;
      currentNode.next = prev;

      prev = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}

const list = new LinkedList();
list.push("Hello");
list.push("How");
list.push("Are");
list.push("You");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.unshift("Oh"));
// console.log(list.shift());
// console.log(list);
// console.log("list-1--->", list);
// console.log(list.pop());
// console.log("list-2--->", list);
// console.log(list.get(3));
// console.log(JSON.stringify(list.setNewVal(-1, "OKAY")));
console.log(JSON.stringify(list));
console.log(JSON.stringify(list.reverse()));
// console.log(JSON.stringify(list.insertNewNode(1, "HOWYOUDOIN")));
// console.log(JSON.stringify(list.removeNode(3)));
