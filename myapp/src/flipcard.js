import React from "react";



const Flipcard = () => {

  return (

    <div>
      {/* <h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3> */}

      <div class="flip-card">

        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2 style={{ textAlign: "left", padding: "0px 10px", fontWeight: "800" }}>INDIAN BANK </h2>
           
            <img src={require("./ac-removebg-preview.png")} />
            <h1>4201 3247 5388 5103<br></br>
              <div><p>VALID FROM : <br></br>
                <span> 01/23</span> </p></div></h1>
            {/* <div><p>EXPIRE TO : <br></br> <span>01/28</span></p></div>   */}


            <div class="matercard-img"><img src={require("./mastercard_text.png")} /></div>
            <h5 style={{ textAlign: "left", padding: "0px 10px", fontWeight: "800" }}>NIVETHITHA U</h5>

          </div>
          <div class="flip-card-back">
            {/* <h1>John Doe</h1>  */}
            <p>Customer Service: +123 456 789</p>
            <div style={{ backgroundColor: "white", width: "450px", height: "50px" }}></div>
            <p style={{ textAlign: "left", paddingLeft: "5px" }}>Authorized Signature</p>
            {/* <div class="progress">
  <div class="progress-bar progress-bar-striped" style={{width:"40%"}}></div>
</div> */}
            <div style={{ backgroundColor: "gray", width: "440px", height: "30px", textAlign: "right", paddingRight: "10px" }}> CVV</div>
            <p style={{ textAlign: "left" }}>This entities is bearer to complimentry admission with one guest. Additional Guests will be  subject to door discretion. This bank is not eligible for lost, stolen, damaged or modified cards and will not issue refnds or credit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Flipcard