import React, { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const updateGameBoard = (row, col) => {
    setGameBoard((prevState) => {
      const updatedBoard = [...prevState.map((innerArray) => [...innerArray])];
      updatedBoard[row][col] = "X";
      return updatedBoard;
    });
  };

  return (
    <div id="game-board">
      <ol>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={`${rowIndex}-${colIndex}`}>
                  <button onClick={() => updateGameBoard(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameBoard;
