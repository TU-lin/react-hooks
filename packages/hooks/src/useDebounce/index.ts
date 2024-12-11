
function useDebounce(callback: Function, wait: number) {
  let flag
  return function () {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      callback.apply(this)
      flag  = false
    },wait)
  }
}

export default useDebounce