import React, {memo, useCallback, useState} from 'react';

const UseCallback = () =>{

    const [count, setCount] = useState(0)

    const increment = useCallback(() =>{

        setCount(Math.floor(Math.random * 100))
    },[])

    return(
        <div style ={{textAlign: 'center'}}>
            {count}<br></br>
            <Child increment = {increment}/>
        </div>
       
    )
}
export default UseCallback

const Child =memo((props) => {

    console.log("Increment render");
    return(
        <>
        <button onClick={props.increment}>Increment</button>
        </>
    )
})