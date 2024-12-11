import { __read } from "tslib";
/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:44:21
 * @LastEditTime: 2024-12-09 16:28:22
 * @Description:
 */
import { useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var set = function (value) {
      return setState(value);
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(reverseValueOrigin);
    };
    var toggle = function () {
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
export default useToggle;