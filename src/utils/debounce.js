export default (fn, delay) => {
  let timerId;
  return (...arg) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
};
