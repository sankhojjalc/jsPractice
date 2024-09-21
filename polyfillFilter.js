const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.customFilter = function (cb) {
  const returnArr = [];
  for (let i = 0; i < this.length; i++) {
    const data = cb(this[i]);
    if (data) {
      returnArr.push(data);
    }
  }
  return returnArr;
};

const val = arr.customFilter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log("val", val);

const val1 = arr.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log("val1", val1);
