import React from 'react'
import { useState } from "react";

export default function Counter() {
    const [count , setCount]=React.useState(0);
    function increment(){
        setCount((oldValue)=>oldValue+1)
    } 
    function decrement(){
        setCount(oldValue=>oldValue-1)
    }      

  return (
    <div className='counter'>
        <div className='counter-value'>
            <h1>{count}</h1>
        </div>
         <div className='counter-buttons'>
         <button className='counter-increment' onClick={increment}>
            <h3>+</h3>
        </button>
        <button className='counter-decrement'onClick={decrement}>
            <h3>-</h3>
        </button>
         </div>
    </div>
  )
}
