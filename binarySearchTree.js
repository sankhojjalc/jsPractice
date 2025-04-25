class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val === val) return "Element Exist";
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) {
      return "EMPTY TREE";
    }
    let current = this.root;
    while (current) {
      if (current.val === val) return "val found";
      if (val < current.val) {
        if (current.left?.val === val) return "val found";
        else if (!current.left) {
          return "Not Found";
        }
        current = current.left;
      } else {
        if (current.right?.val === val) return "val found";
        if (!current.right) {
          return "Not Found";
        }
        current = current.right;
      }
    }
  }

  // insert(val) {
  //   const newNode = new Node(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   let current = this.root;
  //   while (true) {
  //     if (val === current.val) return "wrong data";
  //     if (val < current.val) {
  //       if (!current.left) {
  //         current.left = newNode;
  //         return;
  //       }
  //       current = current.left;
  //     } else {
  //       if (!current.right) {
  //         current.right = newNode;
  //         return this;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }
}

const bst = new BinarySearchTree();
bst.insert(7);
bst.insert(5);
bst.insert(10);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(12);
console.log(bst.find(13));

// console.log(bst);
