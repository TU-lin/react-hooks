function useDebounce(callback, wait) {
  var flag;
  return function () {
    var _this = this;
    if (flag) return;
    flag = true;
    setTimeout(function () {
      callback.apply(_this);
      flag = false;
    }, wait);
  };
}
export default useDebounce;