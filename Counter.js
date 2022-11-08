import React, {useState} from 'react';
import useIncrement from '../Components/useIncrement';

function Counter () {
    const [count, setCount] = useIncrement(1)
    const [count2,setCount2] = useIncrement(2)
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={()=>setCount()}>Add 1</button>
            <p>Count : {count2}</p>
            <button onClick={()=>setCount2()}>Add 2</button>
        </div>
    )  
};
export default Counter;