import React, { Fragment, useState } from "react";
const PlayerInfo = (props) => {
  const [playerData, setPlayerData] = useState({
    playerName: props.initialName,
    playerSymbol: props.symbol,
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditing = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setPlayerData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };


  return (
    <Fragment>
      <li>
        {!isEditMode && <span className="player-name">{playerData.playerName}</span>}
        {isEditMode && (
          <input
            className="player"
            type="text"
            id="player-name"
            name="playerName"
            value={playerData.playerName}
            onChange={handleChange}
            required
          />
        )}

        <span className="player-symbol">{props.symbol}</span>

        <span className="players"></span>

        {!isEditMode && (
          <button type="button" onClick={toggleEditing} className="player">
            Edit
          </button>
        )}

        {isEditMode && (
          <button type="button" onClick={toggleEditing}>
            ✅
          </button>
        )}
      </li>
    </Fragment>
  );
};

export default PlayerInfo;
