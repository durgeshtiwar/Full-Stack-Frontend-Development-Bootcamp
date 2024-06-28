import style from "./Fooditems.module.css";
const foodItems = ({items})=>{

  return(
    <>
    <ul className="list-group">
    {items.map(item =>(
    <li key={item} className="list-group-item">{item}
    <button className={`${style.button} btn btn-info`}
    >Buy Now</button>
    </li>))}
    </ul>
    </>
  );
}
export default foodItems;