import React, { useState } from "react";

function Player({ initialName, symbol }) {
  const [userName, setUserName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((editing) => !editing);
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
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={editHandler}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;
