import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
function App() {
  const [player1Data, setPlayer1Data] = useState({
    playerName: "P1",
    playerSymbol: "X",
  });
  const [player2Data, setPlayer2Data] = useState({
    playerName: "P2",
    playerSymbol: "O",
  });

  return (
    <main>
      <div id="game-container">

        <ol id="players">
          <PlayerInfo
            playerName={player1Data.playerName}
            playerSymbol={player1Data.playerSymbol}
            onPlayerNameChange={setPlayer1Data}
          ></PlayerInfo>
          <PlayerInfo
            playerName={player2Data.playerName}
            playerSymbol={player2Data.playerSymbol}
            onPlayerNameChange={setPlayer2Data}
          ></PlayerInfo>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
