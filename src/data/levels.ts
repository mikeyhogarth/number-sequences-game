import {
  Arithmetic,
  Geometric,
  Fibonacci,
  Prime,
  Power,
  Triangle,
  Twin,
} from "number-sequences";

const levels = [
  Arithmetic(1, 1),
  Arithmetic(1, 2),
  Arithmetic(2, 1),
  Triangle(),
  Arithmetic(0, 3),
  Arithmetic(10, -1),
  Arithmetic(5, 2),
  Arithmetic(1, 8),
  Geometric(1, 2),
  Geometric(2, 2),
  Fibonacci(),
  Prime(),
  Power(2),
  Twin(Arithmetic(2, 1), Arithmetic(3, 0)),
  Twin(Geometric(2, 1), Arithmetic(3, 0)),
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
