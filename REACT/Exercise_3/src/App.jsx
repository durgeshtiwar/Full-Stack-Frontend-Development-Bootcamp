import Container from "./compoenets/Container";
import FoodInput from "./compoenets/FoodInput";
import Fooditems from "./compoenets/Fooditems";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let healthItems = ["Roti","Dal","Hari Sbjiya","Ghee"];
  return (
    <>
    <Container>
    <h1>Fragments, Randring using map, Passing Data Throw Props</h1>
    <FoodInput/>
    <Fooditems items={healthItems} > </Fooditems>
    </Container>
    <Container>
      <p>Above is list of Healthy Food which is good for your health and Well being.</p>
    </Container>
    </>
  )
}

export default App
