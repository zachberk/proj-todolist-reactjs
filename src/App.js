import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList.js";
import InputField from "./InputField.js";
import { Breadcrumb, Layout, theme, Typography } from "antd";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  // For Ant Design Theme
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // For Todo List Functionality
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    newTask !== "" && addTask();
  };

  const handleEnter = (event) => {
    event.key === "Enter" && newTask !== "" && addTask();
  };

  const returnTask = () => {
    return {
      id: todoList.length === 0 ? 1 : todoList.length + 1,
      taskName: newTask,
      checked: false,
    };
  };

  const addTask = () => {
    const task = returnTask();
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (taskID) => {
    setTodoList(todoList.filter((task) => task.id !== taskID));
  };

  const updateTaskCheckedStatus = (taskID, newCheckedStatus) => {
    const updatedTodoList = todoList.map((task) =>
      task.id === taskID ? { ...task, checked: newCheckedStatus } : task
    );
    setTodoList(updatedTodoList);
  };

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header style={{ flexShrink: 0 }}>
        <Title level={2} style={{ color: "white" }}>
          Todo List
        </Title>
      </Header>
      <Content
        style={{
          padding: "0 48px",
          flexGrow: 1,
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Tasks</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <InputField
            newTask={newTask}
            handleInput={handleInput}
            handleEnter={handleEnter}
            handleAddTask={handleAddTask}
          />
          <TodoList
            todoList={todoList}
            deleteTask={deleteTask}
            updateTaskCheckedStatus={updateTaskCheckedStatus}
          />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        Components from Ant Design ©{new Date().getFullYear()}.
      </Footer>
    </Layout>
  );
}

export default App;
