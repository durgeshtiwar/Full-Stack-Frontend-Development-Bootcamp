import TodoItems from "./TodoItems";

const TodoItem = ({todoItems})=>{
  return(
    <>
      <div className="items-Container">
        {todoItems.map(items=><TodoItems key={items.todoName} todoName = {items.todoName} todoDate={items.todoDate}></TodoItems>)}      
      </div>
    </> 
  );
}
export default TodoItem;