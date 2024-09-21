const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.customMap = function (cb) {
  const returnArr = [];
  for (let i = 0; i < this.length; i++) {
    returnArr.push(cb(this[i]));
  }
  return returnArr;
};

const val = arr.customMap((item) => item * 2);
console.log("val", val);

const val1 = arr.map((item) => item * 2);
console.log("val1", val1);
