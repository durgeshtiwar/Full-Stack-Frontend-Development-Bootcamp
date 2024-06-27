import AddTodo from "./components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
function App() {
  return (
    <center className="todo-container">
     <AppName/>
     <AddTodo/>
     <TodoItem1/>
     <TodoItem2/>
    </center>
  )
}

export default App;
