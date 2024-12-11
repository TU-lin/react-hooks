"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:44:21
 * @LastEditTime: 2024-12-09 16:28:22
 * @Description:
 */

function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = (0, _react.useMemo)(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var set = function set(value) {
      return setState(value);
    };
    var setLeft = function setLeft() {
      return setState(defaultValue);
    };
    var setRight = function setRight() {
      return setState(reverseValueOrigin);
    };
    var toggle = function toggle() {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    return {
      set: set,
      setLeft: setLeft,
      setRight: setRight,
      toggle: toggle
    };
  }, []);
  return [state, actions];
}
var _default = exports["default"] = useToggle;