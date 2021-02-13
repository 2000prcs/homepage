// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

const debounce = (func, delay, immediate) => {
  let timeout;
  return (...args) => {
    const boundFunc = func.bind(this, ...args);
    clearTimeout(timeout);
    if(immediate && !timeout) {
      boundFunc();
    };
    const calleeFunc = immediate ? () => { timeout = null } : boundFunc;
    timeout = setTimeout(calleeFunc, delay);
  };
};

export default debounce;