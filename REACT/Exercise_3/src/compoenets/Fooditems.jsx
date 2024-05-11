import style from "./Fooditems.module.css";
const foodItems = ({items,buttonWasClicked})=>{

  return(
    <>
    <ul className="list-group">
    {items.map(item =>(
    <li key={item} className="list-group-item">{item}
    <button className={`${style.button} btn btn-info`}
    onClick={buttonWasClicked}
    >Buy Now</button>
    </li>))}
    </ul>
    </>
  );
}
export default foodItems;