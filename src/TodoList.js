import React from "react";
import { List } from "antd";
import Task from "./Task.js";

const TodoList = (props) => {
  return (
    <List>
      {props.todoList.map((task) => {
        return (
          <Task
            key={task.id}
            taskID={task.id}
            taskName={task.taskName}
            checked={task.checked}
            deleteTask={props.deleteTask}
            updateTaskCheckedStatus={props.updateTaskCheckedStatus}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
