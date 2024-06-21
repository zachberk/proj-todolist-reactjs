import "./App.css";
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setNewTask("");
    console.log("New Todo List: " + newTodoList);
  }

  return (
    <div className="App">
      <div className="addTask">
        <input 
          value={newTask} 
          onChange={handleInput} 
          type="text" 
          placeholder="Enter a new task here..." />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list"></div>
    </div>
  );
}

export default App;
