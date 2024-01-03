import React from "react";

import { useState } from 'react'

const Inputbox = () => {
  
  const [color, setColor] = useState("")

  const handleChange = (e) => {
    setColor(e.target.value)
    document.getElementById("color").value = e.target.value;
  }  

  const handleClick =() => {

    const letters = '0123456789ABCDEFGH';
    let color = '#';
    for(let i =0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 18)];

    }
    return color;
}
  return (
  <div>
    <div style={{width: "500px", height: "250px", backgroundColor: "white"}}></div>
    <br></br>

   <input
   type="text"
   id="color"
   name="color"
   onChange={handleChange}
   value={color}
 /> 


  </div>)
}

export default Inputbox