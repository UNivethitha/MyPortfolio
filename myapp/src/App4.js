import React,{useState} from 'react';


const App4 =() =>{
    
    const [count, setCount]= useState(0);

    const countIncrement=() =>{

        setCount(count + 1);
    };
    const countDecrement=() =>{
        if(count>0)
        setCount(count - 1);
    };

    return(
        <div>

            <h2>Count{count}</h2>

            <button onClick={countIncrement}>Increment</button>
            <button onClick={countDecrement}>Decrement</button>
        </div>
    );

};
export default App4