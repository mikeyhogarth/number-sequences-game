import levels from "../data/levels";
import { Action } from "./actions";
import { Level } from "../data/levels";

export interface State {
  levels: Level[];
  completedLevelIndexes: number[];
}

export const initialState: State = {
  levels,
  completedLevelIndexes: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "COMPLETE_LEVEL":
      return {
        ...state,
        completedLevelIndexes: [
          ...state.completedLevelIndexes,
          action.payload.levelIndex,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
