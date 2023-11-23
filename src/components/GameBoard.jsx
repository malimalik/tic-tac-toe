import React, { Fragment, useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = (props) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [moves, setGameMoves] = useState([]);

  const updateGameBoard = (row, col) => {
    setGameBoard((prevState) => {
      // Prevent updating an already filled cell
      if (prevState[row][col]) return prevState;

      // Create a new board with the updated cell
      const updatedBoard = prevState.map((innerArray, rIdx) =>
        innerArray.map((cell, cIdx) => {
          if (rIdx === row && cIdx === col) {
            return currentPlayer; // Use the current player's symbol
          }
          return cell;
        })
      );

      return updatedBoard;
    });

    // Toggle the current player after updating the board
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <Fragment>
      <h2>Player {currentPlayer}'s turn</h2>
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
        <div>{currentPlayer}</div>
      </div>
    </Fragment>
  );
};

export default GameBoard;
