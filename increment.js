const count = (() => {
  let counter = 0;

  inner = () => {
    counter++;
    console.log(counter);
    return counter;
  };
  inner.reset = () => {
    counter = 0;
  };

  return inner;
})();

count(); //1
count(); //2
count(); //3
count.reset();
count(); //1
