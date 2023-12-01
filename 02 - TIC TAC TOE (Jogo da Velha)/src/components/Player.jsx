import React, { useState } from "react";
import "../index.css";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [userName, setUserName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, userName);
    }
  };

  const changeHandler = (event) => {
    setUserName(event.target.value);
  };

  let playerName = <span className="player-name"> {userName} </span>;
  if (isEditing) {
    playerName = (
      <input type="text" required value={userName} onChange={changeHandler} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={editHandler}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;
