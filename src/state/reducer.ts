import levels from "../data/levels";
import { Action } from "./actions";
import { Level } from "../data/levels";

export interface State {
  levels: Level[];
  completedLevelIndexes: number[];
}

const progress = window.localStorage.getItem("progress");

export const initialState: State = {
  levels,
  completedLevelIndexes: progress ? JSON.parse(progress) : [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "COMPLETE_LEVEL":
      return action.payload.levelIndex !== undefined
        ? {
            ...state,
            completedLevelIndexes: [
              ...state.completedLevelIndexes,
              action.payload.levelIndex,
            ],
          }
        : state;
    case "RESET_PROGRESS":
      return {
        ...state,
        completedLevelIndexes: [],
      };
    default:
      return state;
  }
};

export default reducer;
