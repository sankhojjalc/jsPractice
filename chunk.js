const chunk = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; ) {
    result.push(arr.slice(i, i + size));
    i += size;
  }

  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
