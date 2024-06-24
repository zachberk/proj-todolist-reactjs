import React from "react";
import { List, Typography, Button, Checkbox, Flex } from "antd";
const { Text } = Typography;
const { Item } = List;

const Task = (props) => {
  return (
    <Item>
      <Flex gap="middle" align="center">
        <Checkbox onClick={() => props.updateTaskCheckedStatus(props.taskID, !props.checked)} /> {/* need to create a handler function for when checkbox is clicked; needs to check whether checked status is true or false, updating the "checked" attribute of a task appropriately */}
        <Text delete={props.checked}> {props.taskName} </Text>
        <Button danger onClick={() => props.deleteTask(props.taskID)}>
          X
        </Button>
      </Flex>
    </Item>
  );
};

export default Task;
