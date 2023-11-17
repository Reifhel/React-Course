import React, { useState } from "react";

function Player(props) {
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing(!isEditing);
  };

  let playerName = <span className="player-name"> {props.name} </span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {props.symbol}</span>
      </span>
      <button onClick={editHandler}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;
