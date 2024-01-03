import React, { useState } from "react";
import Hello from "./hello";

 
const Demo = () =>{
    const [fname, setFname] = useState ('')
    const[lname, setLname] = useState ('')

    return(
        <div>
            <input placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
            <br></br>
            <input placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
            <Hello name={fname}/>
        </div>
    )
    

}
export default Demo