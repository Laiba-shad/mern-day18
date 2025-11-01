import React, { useState } from "react";
import ChildCountComponent from "./ChildCountComponent";
interface ParentCountComponentProps {
  init: number;
}

const ParentCountComponent = ({ init }: ParentCountComponentProps) => {
  const [count, setCount] = useState(init);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h3>Increment {count}</h3>
      <div className="flex gap-4 mt-4">
        <ChildCountComponent initial={init} OnIncrement={handleIncrement} />
        <ChildCountComponent initial={init} OnIncrement={handleIncrement} />
        <ChildCountComponent initial={init} OnIncrement={handleIncrement} />
      </div>
    </div>
  );
};

export default ParentCountComponent;
