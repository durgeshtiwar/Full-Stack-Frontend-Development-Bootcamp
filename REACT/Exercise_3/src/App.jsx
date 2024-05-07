import Fooditems from "./compoenets/Fooditems";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let healthItems = ["Roti","Dal","Hari Sbjiya","Ghee"];
  return (
    <>
    <h1>Fragments, Randring using map, Passing Data Throw Props</h1>
    <Fooditems items={healthItems} >

    </Fooditems>
    </>
  )
}

export default App
