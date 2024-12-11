/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:45:00
 * @LastEditTime: 2024-12-10 13:45:37
 * @Description: 
 */
import { renderHook } from '@testing-library/react'
import React from 'react'
import useToggle from '../index';
const callToggle = (hook) => {
  React.act(() => {
    hook.result.current[1].toggle();
  })
}
describe('useToggle', () => { 
  it('test on init',  () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });
  it('test on change', () => { 
    const hook = renderHook(() => useToggle('hello'));
    expect(hook.result.current[0]).toBe('hello');
    callToggle(hook)
    expect(hook.result.current[0]).toBeFalsy()
  })
  it('test set value', () => { 
    const hook = renderHook(() => useToggle('left', 'right'))
    React.act(() => hook.result.current[1].set('right'))
    expect(hook.result.current[0]).toBe('right')
  })
})