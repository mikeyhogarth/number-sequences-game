import React from "react";
import { StoreProvider } from "./state/store";
import { LevelSelect } from "./components/LevelSelect";

const App = () => {
  return (
    <StoreProvider>
      <header className="App-header">
        <h1>Number Sequences Game</h1>
        <LevelSelect />
      </header>
    </StoreProvider>
  );
};

export default App;
