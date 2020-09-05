import React from "react";

type Props = {
  value: number[];
};

export const Sequence = ({ value }: Props) => {
  return <div>{<p>{value.join(", ")}</p>}</div>;
};
