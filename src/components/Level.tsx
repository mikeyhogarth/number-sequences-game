import React, { useContext, useState } from "react";
import { StoreContext } from "../state/store";
import { useParams } from "react-router-dom";
import { Sequence } from "./Sequence";
import { completeLevel } from "../state/actions";
import { Link } from "react-router-dom";

interface FormElements extends HTMLFormElement {
  guess: HTMLInputElement;
}

export const Level = () => {
  const { levelIndex } = useParams();
  const {
    dispatch,
    state: { levels, completedLevelIndexes },
  } = useContext(StoreContext);
  const level = levels[levelIndex];
  const [lastIncorrectGuess, setLastIncorrectGuess] = useState<number | null>();
  const [guess, setGuess] = useState<number>();

  function handleGuessChange(event: React.FormEvent<HTMLInputElement>) {
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
      <Sequence value={level.sequence} />
      <form onSubmit={handleGuessSubmit}>
        <input name="answer" type="number" onChange={handleGuessChange} />
        <input className="btn btn-submit" type="submit" value="Guess" />
      </form>

      {lastIncorrectGuess && `Nope ${lastIncorrectGuess} is not the answer`}

      {completedLevelIndexes.includes(level.index) && (
        <p>
          Congratulations you have comlpeted this level! (the answer was{" "}
          {level.answer})
        </p>
      )}

      <Link className="btn btn-back" to="/">
        Go Back
      </Link>
    </div>
  );
};
