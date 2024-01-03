const Usergreeting =() =>{
    return(
        <div>
            <form id="land_page">
            <div classname="login_page">
            <h1> Welcome to Facebook</h1>
            <input type="text" id="user" placeholder="Enter email address or Phone number"></input><br></br>
            <input type="password" id="pass" placeholder="Password"></input><br></br>
            <a href ="Guestgreeting.js" target="_blank">Forget Password?</a><br></br>
            <hr></hr>
            <button type="button" classname="btn" onClick="">Log in</button><br></br>
            <button type="button" classname="btn_new" onClick="">Create new account</button>
            </div>
            </form>
        </div>
    )
}
export default Usergreeting