import React from "react";
import ListItem from "./List-Item";

export default function List(props: any) {
  console.log(props.todos);
  return (
    <ul>
      {props.todos.map((task: string, index: number) => {
        return <ListItem key={index} value={task} />;
      })}
    </ul>
  );
}
