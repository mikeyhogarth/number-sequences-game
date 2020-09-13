import React, { useContext } from "react";
import { LevelSelectButton } from "./LevelSelectButton";
import { StoreContext } from "../state/store";
import Button from "react-bootstrap/Button";
import { resetProgress } from "../state/actions";
export const LevelSelect = () => {
  const {
    dispatch,
    state: { levels, completedLevelIndexes },
  } = useContext(StoreContext);

  return (
    <div>
      <h2>
        Level Select{" "}
        <Button size="sm" onClick={(e) => dispatch(resetProgress())}>
          Reset Progress
        </Button>
      </h2>
      <ul className="level-select">
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
