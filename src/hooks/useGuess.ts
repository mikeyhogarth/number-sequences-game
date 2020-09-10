import React, { useState, useContext } from "react";
import { completeLevel } from "../state/actions";
import { StoreContext } from "../state/store";
import { Level } from "../data/levels";

export function useGuess(level: Level) {
  const { dispatch } = useContext(StoreContext);

  const [lastIncorrectGuess, setLastIncorrectGuess] = useState<number | null>();
  const [guess, setGuess] = useState<number>();

  function guessIncorrectly(guess: number | undefined) {
    setLastIncorrectGuess(guess);
  }

  function guessCorrectly(index: number) {
    setLastIncorrectGuess(null);
    dispatch(completeLevel(index));
  }

  function handleGuessChange(event: React.ChangeEvent<any>) {
    setGuess(parseInt(event.currentTarget.value));
  }

  function handleGuessSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    guess !== level.answer
      ? guessIncorrectly(guess)
      : guessCorrectly(level.index);
  }

  return {
    handleGuessSubmit,
    handleGuessChange,
    lastIncorrectGuess,
    guess,
  };
}
