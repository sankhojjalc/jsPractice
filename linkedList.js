class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addNodeToFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addNodeToLast(data) {
    const newNode = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = newNode;
      return;
    }

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}
