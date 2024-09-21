const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.customSome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};

const val = arr.customSome((item) => item > 1);
const val1 = arr.some((item) => item > 1);
console.log(val, val1);
