const customTree = {
  id: "root",
  children: [
    {
      id: "child1",
      children: [
        {
          id: "grandchild",
          children: [],
        },
      ],
    },
    {
      id: "child2",
      children: [],
    },
  ],
};

const customGetElementById = (id, tree) => {
  if (id === tree?.id) {
    return tree;
  } else {
    for (const child of tree.children) {
      const found = customGetElementById(id, child);
      if (found) {
        return found;
      } else return null;
    }
    // for (let i = 0; i < tree.children.length; i++) {
    //   const found = customGetElementById(id, tree.children[i]);
    //   if (found) {
    //     return found;
    //   } else return null;
    // }
  }
};

console.log(customGetElementById("child1", customTree));
