

import React,{useEffect, useState} from 'react';


const App5 =(props) =>{
    
    const [name, setName]= useState("Initial state");

    const handlechange=(e) =>{
        setName("New name")
    }

    useEffect(()=>{

    console.log("component render")},[name])
  

    return(
        <div>

            {/* <h2>Count{name}</h2> */}

            {/* <button onClick={handlechange}>Decrement</button> */}
        </div>
    );

};
export default App5










// import React, {useState} from 'react';

// const App5=()=>{

// const[table,settable] = useState("Initial State")
    
// const handlechange=() =>{
// }

//      return (
//     <div classname="app">
        

// <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Roll Number</th>
//           </tr>
//         </thead>
//         <tbody>
         
//         </tbody>
//         </table>
     
//     <button onclick={handlechange}> Click</button>
//      </div>
//      )
//      }
//      export default App5