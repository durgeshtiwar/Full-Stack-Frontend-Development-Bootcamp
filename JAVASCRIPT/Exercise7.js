let arrlist1 = [{Item : 'vbcc',dueDate : '05/06/2033'}];
displayTodo();
function addTodo()
{
    let todoInput = document.querySelector('.todo-Input');
    let dateInput = document.querySelector('.date-Input');
    let todoValue = todoInput.value;
    let dateValue = dateInput.value;
    arrlist1.push({Item : todoValue , dueDate : dateValue});
    todoInput.value="";
    dateInput.value="";
    displayTodo();
}
function displayTodo()
{
    let containerElement = document.querySelector('.container');
    let newHTML = '';
    for (let index = 0; index < arrlist1.length; index++) {
        let { Item , dueDate }=arrlist1[index] ;
        newHTML += `
        <span>${Item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="
        arrlist1.splice(${index},1);
        displayTodo();">Delete</button>
        `
    }
    containerElement.innerHTML = newHTML;
}