import React, { Fragment, useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = (props) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const checkForWinningCombination = (gameBoard) => {
    for (const row of WINNING_COMBINATIONS) {
      const [a, b, c] = row;
      if (
        gameBoard[a.row][a.column] &&
        gameBoard[a.row][a.column] === gameBoard[b.row][b.column] &&
        gameBoard[a.row][a.column] === gameBoard[c.row][c.column]
      ) {
        return gameBoard[a.row][a.column];
      }
    }

    return null;
  };

  const updateGameBoard = (row, col) => {
    setGameBoard((prevState) => {
      if (prevState[row][col]) return prevState;

      const updatedBoard = prevState.map((innerArray, rIdx) =>
        innerArray.map((cell, cIdx) => {
          if (rIdx === row && cIdx === col) {
            return props.activePlayerSymbol;
          }
          return cell;
        })
      );
      const winner = checkForWinningCombination(updatedBoard);
      if (winner) {
        console.log(`${winner} has won the game`);
      } else {
        console.log("the game is not won yet");
      }
      return updatedBoard;
    });

    props.handleSelectSquare();
    props.recordPlayerMove({ row, col });
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
                    <button
                      onClick={() => updateGameBoard(rowIndex, colIndex)}
                      disabled={!!gameBoard[rowIndex][colIndex]}
                    >
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
