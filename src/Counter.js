import React from 'react'
import{useState} from 'react'
import'./Counter.css'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
const Counter=()=>{
  const [count,setCount]=usestate(true);
 function Change() {
setCount(!count)
console.log(count)
 }
return{
<div className='counter'>
<h1>{count ?"true":"false"}</h1>
  <div className={count ? "box-white":"box-dark"}>
</div>      
  <button onClick={change} className='btn_Counter'}>
Dark/white    
</button>
</div>
    )
}