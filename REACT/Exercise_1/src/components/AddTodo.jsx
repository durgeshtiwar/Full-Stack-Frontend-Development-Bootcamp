function AddTodo()
{
  return <>
  <div className="container">
  <div className="row kg-row">
    <div className="col-5">
      <input type="text" placeholder="Enter your here" />
    </div>
    <div className="col-3">
      <input type="date" />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-button">Add Todo</button>
    </div>
  </div>
</div>
  </>
}
export default AddTodo;