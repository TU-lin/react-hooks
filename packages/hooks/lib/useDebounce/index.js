"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var _default = exports["default"] = useDebounce;