import React from "react";
import { Typography, Button, Flex } from "antd";
const { Text } = Typography;

const Task = ({ taskName, onDelete }) => {
  return (
    <Flex gap="middle" align="center">
      <Text>{taskName}</Text>
      <Button danger onClick={onDelete}>
        X
      </Button>
    </Flex>
  );
};

export default Task;
