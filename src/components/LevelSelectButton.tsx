import React from "react";
import { Link } from "react-router-dom";

type Props = {
  levelIndex: number;
  isCompleted: boolean;
};

export const LevelSelectButton = ({ levelIndex, isCompleted }: Props) => {
  return (
    <Link
      className={isCompleted ? "completed" : ""}
      to={`/level/${levelIndex}`}
    >
      <span>Level {levelIndex + 1}</span>
    </Link>
  );
};
