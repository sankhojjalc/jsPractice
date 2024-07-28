const rotateArray = (nums, k) => {
  for (let i = 0; i < (k > nums.length ? k - nums.length : k); i++) {
    const popped = nums.pop();
    nums.unshift(popped);
  }

  return nums;
};

console.log(rotateArray([1, 2], 3));
// [3,99,-1,-100]
