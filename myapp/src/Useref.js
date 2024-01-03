import React, { useRef, useState } from "react";

const Randomcolor = () =>{

    const intervalref = useRef (null);
    const [color, setColor] = useState(generateRandonColor());

    function generateRandonColor(){

        const letters = '0123456789ABCDEFGH';
        let color = '#';
        for(let i =0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 18)];

        }
        return color;
    }
        const startColorChange = () =>{
            clearInterval(intervalref.current);
            intervalref.current = setInterval(() => {
                setColor(generateRandonColor());

            }, 1000)
        }

        const stopColorChange =() =>{

            clearInterval(intervalref.current);

            
        }

        return(
            <div>
               <div style={{

                width:'200px',
                height:'200px',
                backgroundColor: color,
                margin: '20px',
               }}></div>
                <input type="text" id="" onChange={generateRandonColor} value={startColorChange} ></input>
               {/* <button onClick={startColorChange}>Start color Chnage</button> */}
               <button onClick={stopColorChange}>stopColorChange</button>
            </div>
        )
}
export default Randomcolor

