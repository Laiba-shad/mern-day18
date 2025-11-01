import React, { useState } from "react";

interface ChildComponentProps {
  initial: number;
  OnIncrement: (value: number) => void;
}

const ChildCountComponent = ({
  initial,
  OnIncrement: ChildIncrement,
}: ChildComponentProps) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="bg-red-300 w-30 h-30 justify-center items-center">
      <button onClick={() => ChildIncrement(initial)}>Increase</button>
    </div>
  );
};

export default ChildCountComponent;
