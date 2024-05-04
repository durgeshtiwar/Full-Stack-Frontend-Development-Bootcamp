function TodoItem2()
{
  let todoName = 'Go To College';
  let todoDate = '25/11/2024';
  return <>
  <div class="container">
  <div class="row kg-row">
    <div class="col-5">
      {todoName}
    </div>
    <div class="col-3">
      {todoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
</div>
  </>
}
export default TodoItem2;