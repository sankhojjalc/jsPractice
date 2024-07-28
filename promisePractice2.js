// async function asyncSum(promiseArr) {
//   let sum = 0;
//   for (let i = 0; i < promiseArr.length; i++) {
//     try {
//       sum += await promiseArr[i];
//     } catch (error) {
//       continue;
//     }
//   }
//   return sum;
// }

const asyncSum = async (promiseArr) => {
  let sum = 0;
  for (item of promiseArr) {
    try {
      sum += await item;
    } catch (error) {
      continue;
    }
  }
  return sum;
};

asyncSum([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  (x) => console.log(x)
); // 6
asyncSum([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(
  (x) => console.log(x)
); // 4
