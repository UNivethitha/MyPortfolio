import { useState } from "react";
// import "./styles.css";

 function App() {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);
//   const [button1, setButton] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleOnChange = (e) => {
    // const abc = {};
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

//   const button_click = () =>{

//     setButton(button1 + 1);
//     console.log(button1);

//   };

  return (
    <div className="App">
      {/* <button onClick={handleClick}>Hello</button> */}
      
      <input onClick={handleClick}></input>
      {/* <input onClick={han}></input> */}

      {Object.keys(inputValues).map((c) => {
        return <p>{inputValues[c]}</p>;
      })}

      {Array.from(Array(counter)).map((c, index) => {
        return (
          <input
            onChange={handleClick}
            key={c}
            className={index}
            type="text"
          ></input>
          
        );
      })}
    </div>
  );
}
export default App