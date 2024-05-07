// 1+1+2+3+5+8+13

const fibonacci = (num) => {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
};

console.log(fibonacci(2));
