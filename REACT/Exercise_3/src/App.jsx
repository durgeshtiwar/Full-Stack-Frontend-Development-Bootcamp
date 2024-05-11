import { useState } from "react";
import Container from "./compoenets/Container";
import FoodInput from "./compoenets/FoodInput";
import Fooditems from "./compoenets/Fooditems";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let healthItems = ["Roti","Dal","Hari Sbjiya","Ghee"];
  let [textToShow,setTextToShow] = useState();
  const changeOnInput = () => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  }
  const buttonWasClicked = ()=>{
    console.log("Button Clicked");
  };
  return (
    <>
    <Container>
    <h1>Fragments, Randring using map, Passing Data Throw Props</h1>
    <FoodInput changeOnInput={changeOnInput}/>
    <p>{textToShow}</p>
    <Fooditems items={healthItems} buttonWasClicked={buttonWasClicked}
    > </Fooditems>
    </Container>
    <Container>
      <p>Above is list of Healthy Food which is good for your health and Well being.</p>
    </Container>
    </>
  )
}

export default App
