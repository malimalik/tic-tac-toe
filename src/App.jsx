import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo
            initialName="Ali"
            symbol="O"
          ></PlayerInfo>
          <PlayerInfo
            initialName="Max"
            symbol="X"
          ></PlayerInfo>
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
