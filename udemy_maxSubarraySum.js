const maxSubarraySum = (arr, window) => {
  if (arr.length < window) return null;

  let maxSumOfFirstWindow = arr.slice(0, window).reduce((a, b) => a + b, 0);
  let tempSum = maxSumOfFirstWindow;

  for (let i = 0; i + window < arr.length; i++) {
    tempSum = tempSum + arr[i + window] - arr[i];
    if (tempSum > maxSumOfFirstWindow) {
      maxSumOfFirstWindow = tempSum;
    }
  }

  return maxSumOfFirstWindow;
};

console.log("1", maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
