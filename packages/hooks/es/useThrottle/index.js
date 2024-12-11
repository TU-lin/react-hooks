/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-10 13:51:52
 * @LastEditTime: 2024-12-10 14:43:38
 * @Description:
 */
function useThrottle(callback, wait) {
  var timer;
  return function () {
    var _this = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(_this);
    }, wait);
  };
}
export default useThrottle;