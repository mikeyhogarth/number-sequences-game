import { Arithmetic } from "number-sequences";

const levels = [
  Arithmetic(1, 1),
  Arithmetic(1, 2),
  Arithmetic(2, 1),
  Arithmetic(0, 3),
  Arithmetic(10, -1),
  Arithmetic(5, 2),
  Arithmetic(1, 8),
  Arithmetic(4, 2),
  Arithmetic(20, -3),
  Arithmetic(16, 7),
];

export interface Level {
  index: number;
  levelNumber: number;
  sequence: any;
  answer: number;
}

export default levels.map(
  (level, idx: number): Level => {
    const sequence = level.take(10).toArray();
    const answer = sequence.pop() || 0;

    return {
      index: idx,
      levelNumber: idx + 1,
      sequence,
      answer,
    };
  }
);
