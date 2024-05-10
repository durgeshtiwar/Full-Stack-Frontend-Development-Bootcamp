import style from "./Fooditems.module.css";
const foodItems = ({items})=>{
const buttonWasClicked = (item,event)=>{
  console.log(event);
  console.log(`${item} being Clicked`);
};


  return(
    <>
    <ul className="list-group">
    {items.map(item =>(
    <li key={item} className="list-group-item">{item}
    <button className={`${style.button} btn btn-info`}
    onClick={(event)=>buttonWasClicked(item,event)}
    >Buy Now</button>
    </li>))}
    </ul>
    </>
  );
}
export default foodItems;