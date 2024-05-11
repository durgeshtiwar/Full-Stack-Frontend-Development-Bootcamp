import { useState } from "react";
import Container from "./compoenets/Container";
import FoodInput from "./compoenets/FoodInput";
import Fooditems from "./compoenets/Fooditems";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from "./compoenets/ErrorMessage";
function App() {
  
  let [healthItems,sethealthyItems] = useState([]);
  const changeOnInput = (event) => {
    if (event.key === 'Enter') {
      // let newFooditem = event.target.value;
      let newhealthItems = [...healthItems,(event.target.value)];
      event.target.value = '';
      sethealthyItems(newhealthItems);
    }
  }
  
  return (
    <>
    <Container>
    <h1>Healthy Food</h1>
    <FoodInput changeOnInput={changeOnInput}/>
    <Fooditems items={healthItems}> </Fooditems>
    <ErrorMessage items={healthItems}></ErrorMessage>
    </Container>
    </>
  )
}

export default App
