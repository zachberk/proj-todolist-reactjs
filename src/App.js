import "./App.css";
import { useState } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
    console.log(
      "New Todo List: " + [...todoList, task].map((task) => task.taskName)
    ); // to check
  };

  const deleteTask = (taskID) => {
    setTodoList(todoList.filter((task) => task.id !== taskID));
    console.log(
      "New Todo List: " +
        todoList
          .filter((task) => task.id !== taskID)
          .map((task) => task.taskName)
    ); // to check
  };

  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="addTask">
        <input
          value={newTask}
          onChange={handleInput}
          type="text"
          placeholder="Enter a new task here..."
        />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list-wrapper">
        <ul className="list">
          {todoList.map((task) => {
            return (
              <li key={task.id}>
                <div style={{ display: "flex" }}>
                  {task.taskName}
                  <button onClick={() => deleteTask(task.id)}> X </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
