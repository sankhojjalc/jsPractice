const arr = [...Array(10).keys()];

Array.prototype.customReduce = function (cb, def = 0) {
  let sum = 0 + def;

  for (let i = 0; i < this.length; i++) {
    sum = cb(sum, this[i]);
  }
  return sum;
};

const val = arr.customReduce((sum, item) => sum + item, 10);
console.log("val", val);

const val1 = arr.reduce((sum, item) => sum + item, 10);
console.log("val1", val1);
