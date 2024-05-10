import style from "./FoodInput.module.css";
const FoodInput = () => {
  const changeOnInput = () => {
    console.log(event.target.value)
  }
  return <>
  <input className={style.foodInput} type="text" placeholder="Enter Food Items" 
  onChange={changeOnInput}
  />
  </>
}
export default FoodInput;