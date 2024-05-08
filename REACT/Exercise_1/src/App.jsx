import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoItem from './components/TodoItem';

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

  return <center className="todo_container">
      <AppName/>
      <AddTodo/>
      <TodoItem todoItems={todoItems}></TodoItem>
    </center>
    
}
export default App;
