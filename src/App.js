import "./App.css";
import { useState } from "react";
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
const { Title, Text } = Typography;

function App() {
  // For Ant Design Components
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // For Todo List Functionality
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    if (newTask !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList([...todoList, task]);
      setNewTask("");
      // console.log(
      //   "New Todo List: " + [...todoList, task].map((task) => task.taskName)
      // ); // to check
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newTask !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList([...todoList, task]);
      setNewTask("");
      // console.log(
      //   "New Todo List: " + [...todoList, task].map((task) => task.taskName)
      // ); // to check
    }
  };

  const deleteTask = (taskID) => {
    setTodoList(todoList.filter((task) => task.id !== taskID));
    // console.log(
    //   "New Todo List: " +
    //     todoList
    //       .filter((task) => task.id !== taskID)
    //       .map((task) => task.taskName)
    // ); // to check
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
          <Flex gap="middle" className="addTask">
            <Input
              value={newTask}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter a new task here..."
            />
            <Button type="primary" onClick={addTask}>
              {" "}
              Add Task{" "}
            </Button>
          </Flex>
          <List>
            {todoList.map((task) => {
              return (
                <List.Item key={task.id}>
                  <Flex gap="middle" align="center">
                    <Text>{task.taskName}</Text>
                    <Button danger onClick={() => deleteTask(task.id)}>
                      X
                    </Button>
                  </Flex>
                </List.Item>
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
        Components from Ant Design ©{new Date().getFullYear()}. Created by Ant
        UED
      </Footer>
    </Layout>
  );
}

export default App;
