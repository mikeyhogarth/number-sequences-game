import React from "react";
import { Link } from "react-router-dom";

type Props = {
  levelIndex: number;
  isCompleted: boolean;
};

export const LevelSelectButton = ({ levelIndex, isCompleted }: Props) => {
  return (
    <Link to={`/level/${levelIndex}`}>
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        Level {levelIndex + 1}
      </span>
    </Link>
  );
};
