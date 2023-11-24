import React, { Fragment, useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = (props) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [moves, setGameMoves] = useState([]);

  const updateGameBoard = (row, col) => {
    setGameBoard((prevState) => {
      if (prevState[row][col]) return prevState;

      const updatedBoard = prevState.map((innerArray, rIdx) =>
        innerArray.map((cell, cIdx) => {
          if (rIdx === row && cIdx === col) {
            return props.activePlayerSymbol; // Use the current player's symbol
          }
          return cell;
        })
      );

      return updatedBoard;
    });

    // Toggle the current player after updating the board
    props.handleSelectSquare();
  };

  return (
    <Fragment>
      <h2>Player {props.activePlayerSymbol}'s turn</h2>
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
    </Fragment>
  );
};

export default GameBoard;
