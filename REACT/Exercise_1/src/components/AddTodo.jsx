import { useState } from "react";

const AddTodo = ({addTodo}) =>
{
  const[todoName,settodoName] = useState();
  const[dueDate,setdueDate] = useState();

  const handleNameChange = (event)=>
  {
    settodoName(event.target.value);
  }
  const handleDateChange = (event)=>
  {
    setdueDate(event.target.value);
  }
  const buttonOnClick = ()=>
  {
    addTodo(todoName,dueDate);
    settodoName("");
    setdueDate("");
  }

  return <>
  <div className="container">
  <div className="row kg-row">
    <div className="col-5">
      <input type="text" placeholder="Enter your here" value={todoName} onChange={(event)=>handleNameChange(event)}/>
    </div>
    <div className="col-3">
      <input type="date" value={dueDate} onChange={(event)=>handleDateChange(event)} />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-button" onClick={buttonOnClick}>Add Todo</button>
    </div>
  </div>
</div>
  </>
}
export default AddTodo;