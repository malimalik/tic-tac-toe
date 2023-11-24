import React, { Fragment, useState } from "react";
const PlayerInfo = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditing = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const handleChange = (e) => {
    props.onPlayerNameChange((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Fragment>
      <li className={props.isActive ? "active" : undefined}>
        {!isEditMode && <span className="player-name">{props.playerName}</span>}
        {isEditMode && (
          <input
            className="player"
            type="text"
            id="player-name"
            name="playerName"
            value={props.playerName}
            onChange={handleChange}
            required
          />
        )}

        <span className="player-symbol">{props.playerSymbol}</span>

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
