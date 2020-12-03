import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
