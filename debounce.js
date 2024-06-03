const debounce = (fn, delay = 300) => {
  let timeId;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => fn(...args), delay);
  };
};

const printF = (val) => console.log(val);

const optimizedPrint = debounce(printF);

optimizedPrint("H");
optimizedPrint("He");
optimizedPrint("Hel");
optimizedPrint("Hell");
optimizedPrint("Hello");
