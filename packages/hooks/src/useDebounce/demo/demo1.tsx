
import React, { useState } from 'react';
import {useDebounce} from 'reactHooks';
export default () => {
  const [state, setState] = useState(1)
  const handleChange = () => {
    setState((state) => state + 1);
    console.log('1');
    
  }
  return (
    <div>
      <div>Effect:{`${state}`}</div>
      <button onClick={useDebounce(handleChange,2000)}>加一</button>
    </div>
  )
}