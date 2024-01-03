import React from "react";
import { useState } from "react";



function App() {
    const inputArr = [
      {
        type: "text",
        id: 1,
        value: ""
      }
    ];
  
    const [arr, setArr] = useState(inputArr);
  
    const addInput = () => {
      setArr(s => {
        return [
          ...s,
          {
            type: "text",
            value: ""
          }
        ];
      });
    };
  
    const handleChange = e => {
      e.preventDefault();
  
      const index = e.target.id;
      setArr(s => {
        const newArr = s.slice();
        newArr[index].value = e.target.value;
  
        return newArr;
      });
    };
}


// class InputAdder extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             inputs: []
//         }
//     }

//     addInput = ev => {
//         this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.addInput}>Add input</button>
//                 {this.state.inputs.map(node => <input type="text"/>)}
//             </div>
//         )
//     }
// }

export default App