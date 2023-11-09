import React from "react";

import "./Examples.css";

function ExampleItem(props) {
  return (
    <div id="tab-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>
        <code>{props.code}</code>
      </pre>
    </div>
  );
}

export default ExampleItem;
