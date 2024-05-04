function AddTodo()
{
  return <>
  <div class="container">
  <div class="row kg-row">
    <div class="col-5">
      <input type="text" placeholder="Enter your here" />
    </div>
    <div class="col-3">
      <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success kg-button">Add Todo</button>
    </div>
  </div>
</div>
  </>
}
export default AddTodo;