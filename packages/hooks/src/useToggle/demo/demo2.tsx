/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:44:32
 * @LastEditTime: 2024-12-11 10:55:20
 * @Description: 
 */
import React from 'react';
import { useToggle } from 'reactHooks'
export default () => {
  const [state, { set, setLeft, setRight, toggle }] = useToggle('hello', 'world');
  return (
    <div>
      <div>{`Effect: ${state}`}</div>
      <button onClick={()=>set('world')}>set</button>
      <button onClick={setLeft}>setLeft</button>
      <button onClick={setRight}>setRight</button>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}