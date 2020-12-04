import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import "./Form.css";

export default function Form(props: any) {
  const [task, setTask] = useState("");

  function handleChange(event: any) {
    setTask(event?.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.onSubmit(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        type="text"
        placeholder="task"
        value={task}
        onChange={handleChange}
      />
      <Button colorScheme="teal" type="submit">
        Add
      </Button>
    </form>
  );
}
