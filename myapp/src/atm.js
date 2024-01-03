import React from "react";
import { useState } from "react";


const Cr = () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div>
        <label>
            {/* <input type="checkbox" onChange={() => setChecked(!checked)} checked={checked}/> */}
             {
               checked ? (<div style={{width:'400px',
               height:'250px',
               display:"flex",
               alignItems:"center",
               justifyContent: "center",
               marginRight:"30px",
               backgroundColor: "green",
               boxSizing:"border-box",
               border:"2px solid green",
               borderRadius:"7px",
              transform: 'rotateY(0deg)',
              transition: "1s",
              transformOrigin: 'top-right',

              rotateZ: '0.785398rad',
              skewX: '45deg',
               margin: '20px',}}> <div></div></div>) :

               ((<div style={{width:'400px',
                height:'250px',
                display:"flex",
               alignItems:"center",
               justifyContent: "center",
               margin: "30px 0px",
                backgroundColor: "red",
                boxSizing:"border-box",
                borderRadius:"7px",
                transform: 'rotateY(180deg)',
                transition: "1s",
                transformOrigin: 'bottom-left',
  
                margin: '20px',}}><div><h1 style={{textAlign: "left"}}>Indian Bank</h1></div></div>)
                 )
             }
       </label>
      </div>
    );
  };
  export default Cr