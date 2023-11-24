import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [player1Data, setPlayer1Data] = useState({
    playerName: "P1",
    playerSymbol: "X",
  });
  const [player2Data, setPlayer2Data] = useState({
    playerName: "P2",
    playerSymbol: "O",
  });

  const handleSelectSquare = () => {
    setCurrentPlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X");
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            playerName={player1Data.playerName}
            playerSymbol={player1Data.playerSymbol}
            onPlayerNameChange={setPlayer1Data}
            isActive={currentPlayer === 'X'}
          ></PlayerInfo>
          <PlayerInfo
            playerName={player2Data.playerName}
            playerSymbol={player2Data.playerSymbol}
            onPlayerNameChange={setPlayer2Data}
            isActive={currentPlayer === 'O'}

          ></PlayerInfo>
        </ol>
        <GameBoard handleSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer} />
      </div>
    </main>
  );
}

export default App;
