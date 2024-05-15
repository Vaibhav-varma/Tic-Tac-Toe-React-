import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(name);

  function handleClick(button) {
    if (button === "Edit") {
      setIsEdit(true);
    } else {
      setPlayerName(input);
      setIsEdit(false);
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEdit ? (
          <input
            onChange={handleChange}
            type="text"
            placeholder={input}
            value={input}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      {isEdit ? (
        <button
          onClick={() => {
            handleClick("Save");
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick("Edit");
          }}
        >
          Edit
        </button>
      )}
    </li>
  );
}
