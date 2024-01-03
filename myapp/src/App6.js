import React,{useState} from 'react';


const App6 =(props) =>{
    
    const [name, setName]= useState({username:"", password:"",email:""});

    const [formsList, setFormsList] = useState([]);

  const handleInputChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the current form data to the list
    setFormsList([...formsList, name]);

    // Clear the form fields after submission
    setName({
      username: "",
      password: "",
      email: ""
    });
  };


    return(
        <div>

<h1>{name.username}</h1>
      <h1>{name.password}</h1>
      <h1>{name.email}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={name.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={name.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={name.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr className="App">
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {formsList.map((Forms, index) => (
            <tr key={index}>
              <td>{Forms.username}</td>
              <td>{Forms.password}</td>
              <td>{Forms.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );

};
export default App6