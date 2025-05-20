import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const CounterApp =( { value } )=>{

    const [count, setCount] = useState( value );

    const handleAdd = (suma)=>{
       // setCount(count + 1)
       if(suma=== true){
         setCount((c) => c + 1);
       }else{
         setCount((c) => c - 1);
       }
    }
    // const handleSubtract = ()=> setCount(count - 1);
    // const handleReset = ()=> setCount(value);

    return(
    <>
        <h1>CounterApp</h1>
        <h2> { count  } </h2>
        <button onClick={()=>handleAdd(true)} >+1</button>
        <button onClick={()=>handleAdd(false)} >-1</button>
        <button onClick={()=>setCount(value)} >Reset</button>

    </>);
};

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}