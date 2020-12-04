import { Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";
import "./List-Item.css";

export default function ListItem(props: any) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <div className="list-item">
      <Checkbox onChange={() => toggleChecked()} checked={checked} />
      <li className={`${checked ? "checked" : ""}`}>{props.value}</li>
    </div>
  );
}
