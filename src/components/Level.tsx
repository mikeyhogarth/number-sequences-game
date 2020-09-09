import React, { useContext, useState } from "react";
import { StoreContext } from "../state/store";
import { useParams } from "react-router-dom";
import { Sequence } from "./Sequence";
import { completeLevel } from "../state/actions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

export const Level = () => {
  const { levelIndex } = useParams();
  const {
    dispatch,
    state: { levels, completedLevelIndexes },
  } = useContext(StoreContext);

  const level = levels[levelIndex];
  const [lastIncorrectGuess, setLastIncorrectGuess] = useState<number | null>();
  const [guess, setGuess] = useState<number>();

  function handleGuessChange(event: React.ChangeEvent<any>) {
    setGuess(parseInt(event.currentTarget.value));
  }

  function handleGuessSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (guess !== level.answer) return setLastIncorrectGuess(guess);

    // Guess correct!
    setLastIncorrectGuess(null);
    dispatch(completeLevel(level.index));
  }

  // Component
  return (
    <div>
      <h1>Level {level.levelNumber}</h1>
      <p> Which number comes next? </p>
      <Sequence value={level.sequence} />

      <Form onSubmit={handleGuessSubmit}>
        <InputGroup>
          <Form.Control
            name="answer"
            type="number"
            className="guess"
            placeholder="Enter your guess..."
            aria-label="Guess"
            onChange={handleGuessChange}
          />
          <InputGroup.Append>
            <Button as="input" type="submit" value="Guess" />
          </InputGroup.Append>
        </InputGroup>
      </Form>
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
