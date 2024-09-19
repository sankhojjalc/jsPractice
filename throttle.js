const throttle = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      return;
    }
    fn(args);
    timer = setTimeout(() => {
      clearTimeout(timer);
    }, delay);
  };
};
