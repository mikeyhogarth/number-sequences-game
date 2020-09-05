import levels from "../data/levels";
import { Action } from "./actions";

export interface State {
  levels: any[];
  completedLevels: number[];
}

export const initialState: State = {
  levels,
  completedLevels: [],
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "COMPLETE_LEVEL":
      return {
        ...state,
        completedLevels: [...state.completedLevels, action.payload.levelNumber],
      };
    default:
      return state;
  }
};

export default reducer;
