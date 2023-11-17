import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" symbol="X" />
          <Player name="player2" symbol="0" />
        </ol>
        GAME BOARD
      </div>
      log
    </main>
  );
}

export default App;
