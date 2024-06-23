import React from "react";
import { List, Typography, Button, Flex } from "antd";
const { Text } = Typography;
const { Item } = List;

const Task = (props) => {
  return (
    <Item key={props.taskID}>
      <Flex gap="middle" align="center">
        <Text>{props.taskName}</Text>
        <Button danger onClick={() => props.deleteTask(props.taskID)}>
          X
        </Button>
      </Flex>
    </Item>
  );
};

export default Task;
