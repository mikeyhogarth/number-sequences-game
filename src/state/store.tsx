import React, { createContext, useReducer } from "react";
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

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
