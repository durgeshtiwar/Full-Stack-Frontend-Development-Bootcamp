let arrlist1 = [];
function addTodo()
{
    let todoInput = document.querySelector('.todo-Input');
    let todoValue = todoInput.value;
    arrlist1.push(todoValue);
    todoInput.value="";
}