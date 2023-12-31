import React from "react";

function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}

export default TabButton;
