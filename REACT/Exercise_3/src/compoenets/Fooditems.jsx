const foodItems = ({items})=>{
  return(
    <>
    <ul class="list-group">
    {items.map(item =>(<li class="list-group-item">{item}</li>))}
    </ul>
    </>
  );
}
export default foodItems;