const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.customEvery = function (cb) {
  console.log("this", this);
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};

const val = arr.customEvery((item) => item > 0);
const val1 = arr.every((item) => item > 0);
console.log(val, val1);
