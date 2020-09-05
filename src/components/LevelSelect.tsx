import React, { useContext } from "react";
import { LevelSelectButton } from "./LevelSelectButton";
import { StoreContext } from "../state/store";

export const LevelSelect = () => {
  const {
    state: { levels, completedLevelIndexes },
  } = useContext(StoreContext);

  return (
    <div>
      <h2>Level Select</h2>
      <ul>
        {levels.map((level, idx) => (
          <li key={idx}>
            <LevelSelectButton
              levelIndex={idx}
              isCompleted={completedLevelIndexes.includes(idx)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
