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

export default levels.map((level) => level.take(10).toArray());
