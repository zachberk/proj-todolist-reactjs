import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");
    console.log("New Todo List: " + [...todoList, newTask]); // to check
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
    console.log(
      "New Todo List: " + todoList.filter((task) => task !== taskName)
    ); // to check
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          value={newTask}
          onChange={handleInput}
          type="text"
          placeholder="Enter a new task here..."
        />
        <button onClick={addTask}> Add Task </button>
      </div>
      <ul className="list">
        {todoList.map((task, index) => {
          return (
            <li key={task + index}>
              <div style={{ display: "flex" }}>
                {task}
                <button onClick={() => deleteTask(task)}> X </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
