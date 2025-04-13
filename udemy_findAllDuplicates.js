const findAllDuplicates = (arr) => {
  const arr1 = [];
  const duplicateArr = [];

  arr.forEach((item) => {
    if (arr1.includes(item)) {
      duplicateArr.push(item);
    } else {
      arr1.push(item);
    }
  });

  return duplicateArr;
};

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
