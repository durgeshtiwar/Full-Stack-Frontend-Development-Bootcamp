import { useState } from "react";

function AddTodo({addTodo})
{
  const[todoName,settodoName] = useState();
  const[dueDate,setdueDate] = useState();

  const handleNameChange = (event)=>
  {
    console.log(event.target.value);
  }
  const handleDateChange = (event)=>
    {
      console.log(event.target.value);
    }

  return <>
  <div className="container">
  <div className="row kg-row">
    <div className="col-5">
      <input type="text" placeholder="Enter your here" onChange={(event)=>handleNameChange(event)}/>
    </div>
    <div className="col-3">
      <input type="date" onChange={(event)=>handleDateChange(event)} />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-button" onClick={
      ()=>addTodo("a","b")
    }>Add Todo</button>
    </div>
  </div>
</div>
  </>
}
export default AddTodo;