/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:44:21
 * @LastEditTime: 2024-12-09 16:28:22
 * @Description: 
 */
import { useState, useMemo } from 'react'
export interface Actions<T> {
  set: (T) => void;
  setLeft: () => void;
  setRight: () => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];
function useToggle<T,U>(defaultValue:T = false as unknown as T,reverseValue?:U) {
  const [state, setState] = useState<T | U>(defaultValue);
  const actions = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue
    const set = (value:T) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const toggle = () => setState((s)=>s === defaultValue ? reverseValueOrigin: defaultValue);
    return {
      set,
      setLeft,
      setRight,
      toggle
    }
  },[])
  return [state,actions]
}
export default useToggle