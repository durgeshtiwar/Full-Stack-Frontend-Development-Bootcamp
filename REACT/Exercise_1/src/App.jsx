import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
  const todoItems = [
    {
      todoName : 'Buy Milk',
      todoDate : '25/11/2024',
    },
    {
      todoName : 'Go To College',
      todoDate : '25/11/2024',
    },
    {
      todoName : 'Use This Project',
      todoDate : '03/11/2024',
    }
  ];

  let [valTodo,setvalTodo] = useState(todoItems);
  const addTodo=(todoName,dueDate)=>
    {
      console.log(`${todoName} and ${dueDate}`)
    }
  return <center className="todo_container">
      <AppName/>
      <AddTodo addTodo={addTodo} />
      <TodoItem todoItems={valTodo}></TodoItem>
    </center>
    
}
export default App;
