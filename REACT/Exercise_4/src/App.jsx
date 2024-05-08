import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"

function App() {
  return (
    <center>
      <h1>Calculator</h1>
    <div className={style.calcuContainer}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
    </center>
  );}

export default App
