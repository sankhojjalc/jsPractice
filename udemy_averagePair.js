const averagePair = (arr, target) => {
  if (!arr.length) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === target) return true;
    else if ((arr[left] + arr[right]) / 2 < target) {
      left++;
    } else if ((arr[left] + arr[right]) / 2 > target) {
      right--;
    }
  }
  return false;
};

console.log(averagePair([], 4));
