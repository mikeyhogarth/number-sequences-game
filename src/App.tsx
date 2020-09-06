import React from "react";
import { StoreProvider } from "./state/store";
import { LevelSelect } from "./components/LevelSelect";
import { Level } from "./components/Level";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <header className="App-header">
          <h1>Number Sequences</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={LevelSelect} />
            <Route path="/level/:levelIndex" component={Level} />
          </Switch>
        </main>
      </Router>
    </StoreProvider>
  );
};

export default App;
