import style from "./FoodInput.module.css";
const FoodInput = ({changeOnInput}) => {
  return <>
  <input className={style.foodInput} type="text" placeholder="Enter Food Items" 
  onChange={changeOnInput}
  />
  </>
}
export default FoodInput;