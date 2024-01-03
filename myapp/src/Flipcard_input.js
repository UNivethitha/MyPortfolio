import React from "react";
import { useState } from "react";




const Flipcard_input = () => {

    const [name, setName] = useState({
        
    carno: "",
    myname: "",
    // valid: "",
    cvv : ""
  
})

    // const [carno, setCarno] = useState("")
    // const [myname, setMyname] = useState("")
    // const [cvv,setCvv] = useState("")

   

      const[cvv1, setCvv] = useState(false);
      
    

    const handleInputChange = (e) =>{

        setName({...name, [e.target.name] : e.target.value})

    }
    // const handleInput = (e) =>{

    //   setCvv({...name, [e.target.name] : e.target.value})

    // }
    
    const handleCvvInput =() =>{
      setCvv(true)
    }
      console.log(name.cvv, "cvv1")
  return (

    <div>
      {/* <h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3> */}

      <div class="flip-card">

          

      
          
        <div class={cvv1 ? "flip-card-inner" : "flip-card-innerr"}>
          
                    <div class="flip-card-front">
                     
            <h2 style={{ textAlign: "left", padding: "0px 10px", fontWeight: "800" }}>YOUR BANK NAME </h2>
           
            <img src={require("./ac-removebg-preview.png")} />
            <h1>{name.carno}<br></br></h1>
            {/* <div class="worldmap_img">
                    <img src={require("./worldmap.png") }/></div> */}
              <div><p class="valid">VALID FROM : <br></br>
                <span> {name.valid} </span> </p></div>
            {/* <div><p>EXPIRE TO : <br></br> <span>01/28</span></p></div>   */}
            
            
            <div class="matercard-img"><img src={require("./mastercard_text.png")} /></div>
            <h5 style={{ textAlign: "left", padding: "10px 20px", fontSize:"large"}}>{name.myname}</h5>

          </div>
          <div class="flip-card-back">
            {/* <h1>John Doe</h1>  */}
            <p>Customer Service: +123 456 789</p>
            <div style={{ backgroundColor: "white", width: "450px", height: "50px" }}></div>
            <p style={{ textAlign: "left", paddingLeft: "5px" }}>Authorized Signature</p>
            {/* <div class="progress">
  <div class="progress-bar progress-bar-striped" style={{width:"40%"}}></div>
</div> */}
            {/* <img src={require("./CC_back_EN.png")} /> */}
            <div style={{ backgroundColor: "gray", width: "450px", height: "30px", textAlign: "right", paddingRight: "10px" }}> {name.cvv} </div>
            <p className="back_para">This entities is bearer to complimentry admission with one guest. Additional Guests will be  subject to door discretion. This bank is not eligible for lost, stolen, damaged or modified cards and will not issue refnds or credit.</p>
          </div>
        </div>
      </div>
      {/* <br></br> */}
    <form backgroundColor="#efe625">
      <br></br>
     
     <label> Card Number : <input type="number" name="carno" value={name.carno} onChange={handleInputChange}></input></label>
     <label> Card HolderName : <input type="text" name="myname" value={name.myname} onChange={handleInputChange}></input></label>
     <label> Card Validity Date From : <input type="number" name="valid" value={name.name} onChange={handleInputChange}></input></label>
     <div onClick={handleCvvInput}>
     <label> Card CVV :</label> <input type="number" name="cvv" value={name.cvv} onChange={handleInputChange}></input>
</div>
     
      </form>
    </div>
  )
}
export default Flipcard_input