const cache = {};
const memoizedOne = (fn) => {
  return (...args) => {
    const key = args.join("-");
    //if the params matches, then call from cache
    if (cache[key]) {
      console.log("i'm from cache");
      return cache[key];
    }
    //else execute the function
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
const add = (a, b) => a + b;

const memoizedAdd = memoizedOne(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(1, 2));
