// const rotateArray = (nums, k) => {
//   for (let i = 0; i < (k > nums.length ? k - nums.length : k); i++) {
//     const popped = nums.pop();
//     nums.unshift(popped);
//   }

//   return nums;
// };

// console.log(rotateArray([1, 2], 3));
// // [3,99,-1,-100]

const rotate = (nums, k) => {
  const netShift = k % nums.length;
  const posVal = nums[netShift];
  const result = [...nums.slice(posVal, nums.length), ...nums.slice(0, posVal)];
  return result;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
