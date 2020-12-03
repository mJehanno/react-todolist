import * as React from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todos, setTodos] = React.useState<string[]>([]);

  const handleSubmit = (value: string) => {
    setTodos(todos.concat(value));
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <List todos={todos} />
    </div>
  );
}
