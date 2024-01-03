import React, { memo, useCallback, useState } from "react";

const UseCallback = () =>{

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() =>{

        setCount(Math.floor(Math.random() * 100))
    },[])

    return (
        <div>
            {count}
            <Child function = {handleClick}/>
        </div>
    )
}

export default UseCallback

const Child = memo((props) => {
    console.log("re-render")
    return(
        <>
        <button onClick={props.function}>Add</button>
        </>
    )
}
)