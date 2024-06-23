import "./App.css";
import { useState } from "react";
import Task from "./Task.js";
import {
  Breadcrumb,
  Layout,
  theme,
  List,
  Typography,
  Button,
  Input,
  Flex,
} from "antd";
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

  const handleAddTask = (event) => {
    if (newTask !== "") {
      const task = addTask();
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newTask !== "") {
      const task = addTask();
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };

  const addTask = () => {
    return {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
  };
  const deleteTask = (taskID) => {
    setTodoList(todoList.filter((task) => task.id !== taskID));
  };

  return (
    <Layout>
      <Header>
        <Title level={2} style={{ color: "white" }}>
          Todo List
        </Title>
      </Header>
      <Content
        style={{
          padding: "0 48px",
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
          <Flex gap="middle">
            <Input
              value={newTask}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter a new task here..."
            />
            <Button type="primary" onClick={handleAddTask}>
              Add Task
            </Button>
          </Flex>
          <List>
            {todoList.map((task) => {
              return (
                <Task
                  taskID={task.id}
                  taskName={task.taskName}
                  deleteTask={deleteTask}
                />
              );
            })}
          </List>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Components from Ant Design ©{new Date().getFullYear()}.
      </Footer>
    </Layout>
  );
}

export default App;
