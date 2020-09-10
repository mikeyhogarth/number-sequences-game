import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer, State } from "./reducer";
import { Action } from "./actions";

const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const StoreProvider = ({ children }: { children: React.ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // persist progress
  useEffect(() => {
    window.localStorage.setItem(
      "progress",
      JSON.stringify(state.completedLevelIndexes)
    );
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
