import style from "./Fooditems.module.css";
const foodItems = ({items})=>{
  return(
    <>
    <ul class="list-group">
    {items.map(item =>(<li class="list-group-item">{item}
    <button className={`${style.button} btn btn-info`}
    onClick={()=>console.log("Button Clicked")}
    >Buy Now</button>
    </li>))}
    </ul>
    </>
  );
}
export default foodItems;