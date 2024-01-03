import React,{useState} from 'react'



 const App2 = (props)=>{

    const [name,setName]=useState({
      username:"", 
      password:" ", 
      email:" "
    })
                          
  
    const handlechange=(e)=>{
      console.log(e)
     
      setName({
        ...name,
        [e.target.name]:e.target.value
      })
       
    }
    console.log(name)
  
    return (
     <div>
      
      <h1>{name.username}</h1>
      <h1>{name.password}</h1>
      <h1>{name.email}</h1>
      <input type="text" name="username" onChange={handlechange}/>
      <input type='password' name="password" onChange={handlechange}/>
      <input type='email' name="email" onChange={handlechange}/>
      
      <button onClick={handlechange}>Submit</button>
  
      
      </div>
    );
}
export default App2