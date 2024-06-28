import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"
import { useState } from "react";

function App() {
  let [calvalue,setcalvalue] = useState("");
  const handleClick = (event)=>{
    let buttonText = event.target.innerText;
    if (buttonText === 'c') {
      setcalvalue("");
    }else if(buttonText === '=') {
      let result = eval(calvalue);
      setcalvalue(result);
    } 
    else 
    {
      setcalvalue(calvalue + buttonText);
    }
  }
  return (
    <center>
      <h1>Calculator</h1>
      <div className={style.calcuContainer}>
      <Display displayVal = {calvalue}></Display>
      <ButtonContainer 
      onButttonClick={(event)=>handleClick(event)}
      ></ButtonContainer>
    </div>
    </center>
  );}

export default App;
