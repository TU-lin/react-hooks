/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-10 14:39:27
 * @LastEditTime: 2024-12-11 10:58:12
 * @Description: 
 */
import React,{ useState } from 'react';
import { useThrottle } from 'reactHooks';
export default () => {
  const [state, setState] = useState(1)
  const handleChange = () => {
    setState((s) => s + 1);
  }
  return (
    <div>
      <div>Effect: {`${state}`}</div>
      <button onClick={useThrottle(handleChange,2000)}>+1</button>
    </div>
  )
}