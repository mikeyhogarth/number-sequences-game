import React from "react";
import { StoreProvider } from "./state/store";
import { LevelSelect } from "./components/LevelSelect";
import { Level } from "./components/Level";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Container>
          <Row>
            <Col>
              <main>
                <Switch>
                  <Route path="/" exact component={LevelSelect} />
                  <Route path="/level/:levelIndex" component={Level} />
                </Switch>
              </main>
            </Col>
          </Row>
        </Container>
      </Router>
    </StoreProvider>
  );
};

export default App;
