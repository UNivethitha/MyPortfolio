import React from "react";
import { useState } from "react";


const Cr = () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div>
        <label>
            <input type="checkbox" onChange={() => setChecked(!checked)} checked={checked}/>
             {
               checked ? (<div style={{width:'400px',
               height:'250px',
               backgroundColor: "green",
               boxSizing:"border-box",
               border:"2px solid green",
               borderRadius:"7px",
              transform: 'rotateY(0deg)',
              transition: "1s",
              transformOrigin: 'top-right',

              rotateZ: '0.785398rad',
              skewX: '45deg',
               margin: '20px',}}></div>) : 

               ((<div style={{width:'400px',
                height:'250px',
                backgroundColor: "red",
                boxSizing:"border-box",
                borderRadius:"7px",
                transform: 'rotateY(180deg)',
                transition: "1s",
                transformOrigin: 'bottom-left',
  
                margin: '20px',}}></div>)
                 )
             }
       </label>
      </div>
    );
  };
  export default Cr