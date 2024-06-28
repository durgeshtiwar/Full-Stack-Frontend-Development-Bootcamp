
import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setConter] = useState(10);
  const addValue = ()=>{
    if (counter <20) {
      counter = counter + 1;
      setConter(counter);
    }
  }
  const removeValue = ()=>{
    if (counter >0) {
      counter = counter - 1;
      setConter(counter);
    }
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>This is a simple counter app </h2>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={removeValue}
      >Remove Value</button>
      
    </>
  )
}

export default App
