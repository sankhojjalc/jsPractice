const memoOne = (fn) => {
  const obj = {}
  return (...args) => {
    const key = args.join('-');
        //if the params matches, then call from cache
    if (obj.hasOwnProperty(key)) {
      console.log('im from cache')
      return obj[key]
    }
        //else execute the function
    const result = fn(...args);
    obj[key]=result;
    return obj[key]
  }
}
const add = (a, b) => a + b;
const memoAdd = memoOne(add);

console.log(memoAdd(1, 2));
console.log(memoAdd(3, 4));
console.log(memoAdd(3, 2));
console.log(memoAdd(1, 2));
console.log(memoAdd(3, 4));
