import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Fim de jogo </h2>
      {winner && <p> {winner} venceu </p>}
      {!winner && <p> Empate </p>}
      <p>
        <button onClick={onRestart}>Jogar de novo</button>
      </p>
    </div>
  );
}

export default GameOver;
