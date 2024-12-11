/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 14:44:30
 * @LastEditTime: 2024-12-11 11:00:21
 * @Description: 
 */
import { useToggle } from 'reactHooks';
import React from 'react';
export default()=> {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  console.log('11111',state)
  return (
    <div>
      <div>{`${state} `}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setLeft}>setLeft</button>
      <button onClick={setRight}>setRight</button>
    </div>
  )
  
}
