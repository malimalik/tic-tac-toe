import React, { Fragment, useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const STATUS = Object.freeze({
  WON: "WON",
  LOST: "LOST",
  DRAW: "DRAW",
  PLAYING: "PLAYING",
});

const GameBoard = (props) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [gameStatus, setGameStatus] = useState(STATUS.PLAYING);

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

  let winner;

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

      winner = checkForWinningCombination(updatedBoard);
      if (winner) {
        setGameStatus(STATUS.WON);
      }
      return updatedBoard;
    });

    props.handleSelectSquare();

    props.recordPlayerMove({ row, col });
  };

  const resetBoard = () => {
    setGameBoard(initialBoard);
    setGameStatus(STATUS.PLAYING);
  };

  const gameOver = (
    <div id="game-over">
      <h2>{props.winner} won the game</h2>
      <p>Play Again?</p>
      <button onClick={resetBoard}>Yes</button>
      <button>No</button>
    </div>
  );

  return (
    <Fragment>
      <h2>Player {props.activePlayerSymbol}'s turn</h2>
      <div id="game-board">
        {gameStatus === STATUS.PLAYING && (
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
        )}
        {gameStatus === STATUS.WON && gameOver}
      </div>
    </Fragment>
  );
};

export default GameBoard;
