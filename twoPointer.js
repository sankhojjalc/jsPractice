const twoPointer = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else j--;
  }
  return "not found";
};

console.log(twoPointer([2, 3, 5, 6, 8, 9, 10, 11], 8));
