const bubbleSort = (arr) => {
  let length = 0;

  while (length < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    length++;
  }

  return arr;
};

console.log(bubbleSort([5, 3, 4, 1, 2]));
