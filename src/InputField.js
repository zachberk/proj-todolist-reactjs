import React from "react";
import { Flex, Input, Button } from "antd";

const InputField = (props) => {
  return (
    <Flex gap="middle">
      <Input
        value={props.newTask}
        onChange={props.handleInput}
        onKeyDown={props.handleEnter}
        type="text"
        placeholder="Enter a new task here..."
      />
      <Button type="primary" onClick={props.handleAddTask}>
        Add Task
      </Button>
    </Flex>
  );
};

export default InputField;
