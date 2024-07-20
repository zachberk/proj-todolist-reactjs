import React from "react";
import { List, Typography, Button, Checkbox, Flex } from "antd";
const { Text } = Typography;
const { Item } = List;

const Task = (props) => {
  return (
    <Item>
      <Flex gap="middle" align="center">
        <Checkbox
          onClick={() =>
            props.updateTaskCheckedStatus(props.taskID, !props.checked)
          }
        />
        <Text delete={props.checked}> {props.taskName} </Text>
        <Button danger onClick={() => props.deleteTask(props.taskID)}>
          X
        </Button>
      </Flex>
    </Item>
  );
};

export default Task;
