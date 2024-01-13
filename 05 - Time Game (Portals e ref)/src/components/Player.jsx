import { useRef, useState } from "react";

export default function Player() {
  const playerNameInput = useRef();

  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerNameInput.current.value);
  }

  return (
    <section id="player">
      <h2>Bem vindo {playerName ?? "Ser Desconhecido"}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick={handleClick}>Definir Nome</button>
      </p>
    </section>
  );
}
