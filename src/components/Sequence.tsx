import React from "react";

type Props = {
  value: number[];
};

export const Sequence = ({ value }: Props) => {
  return (
    <div className="sequence">
      {value.map((n) => (
        <span className="sequence-number">{n}</span>
      ))}
      <span className="sequence-number">?</span>
    </div>
  );
};
