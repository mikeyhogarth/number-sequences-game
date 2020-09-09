import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../state/store";

export function useLevelDetails() {
  const { levelIndex } = useParams();
  const {
    state: { levels, completedLevelIndexes },
  } = useContext(StoreContext);
  const level = levels[levelIndex];

  return { level, completedLevelIndexes };
}
