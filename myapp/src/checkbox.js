import React from "react";
import { useState } from "react";

const Input = () => {
   const [inputValues, setInputValues] = useState({});
   const [color, setColor] = React.useState(); 

   function handleChange(e) {

      setColor(e.target.Input);
   }

   const clear = (e) =>{

      const abc = {};
    abc[e.target.input] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
   }
   return (
      <div>
         <h4>
            {/* {" "}
            Creating the <i> Custom controlled checkbox </i> in the React application {" "} */}
         </h4>
         <input value = {inputValues} type = "text" onChange = {handleChange} />
         <br></br>
         {Input ? (
            <div className="input" style={{width: "300px", height: "150px", backgroundColor: "white"}}> </div>
         ) : (
            null
         )}
      </div>
   );
};
export default Input;