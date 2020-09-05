import React, { useContext } from "react";
import { StoreContext } from "../state/store";
import { completeLevel } from "../state/actions";

export const LevelSelect = () => {
  const {
    state: { levels, completedLevels },
    dispatch,
  } = useContext(StoreContext);
  return (
    <div>
      <h2>Level Select</h2>
      <ul>
        {levels.map((level, levelNumber) => (
          <li>
            <button
              style={{ display: "inline-block" }}
              onClick={(e) => dispatch(completeLevel(levelNumber))}
            >
              {levelNumber}
            </button>
            <span>
              {completedLevels.includes(levelNumber) && level.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
