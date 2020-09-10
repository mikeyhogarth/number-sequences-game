import React from "react";
import { Sequence } from "./Sequence";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { useGuess } from "../hooks/useGuess";
import { useLevelDetails } from "../hooks/useLevelDetails";
import Col from "react-bootstrap/Col";

export const Level = () => {
  const { level, completedLevelIndexes } = useLevelDetails();

  const { handleGuessChange, handleGuessSubmit, lastIncorrectGuess } = useGuess(
    level
  );

  return (
    <div>
      <h1>Level {level.levelNumber}</h1>
      <p> Which number comes next? </p>
      <Sequence value={level.sequence} />

      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleGuessSubmit}>
          <InputGroup>
            <Form.Control
              name="answer"
              type="number"
              className="guess"
              size="lg"
              placeholder="Enter your guess..."
              aria-label="Guess"
              onChange={handleGuessChange}
            />
            <InputGroup.Append>
              <Button as="input" type="submit" value="Guess" />
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
      <br />
      {lastIncorrectGuess && (
        <Alert variant="danger">
          Nope {lastIncorrectGuess} is not the answer
        </Alert>
      )}

      {completedLevelIndexes.includes(level.index) && (
        <Alert variant="success">
          Congratulations you have comlpeted this level! (the answer was{" "}
          {level.answer})
        </Alert>
      )}

      <br />
      <Link to="/" className="btn btn-warning">
        Go Back
      </Link>
    </div>
  );
};
