import React, { useState } from "react";
import ChildCountComponent from "./ChildCountComponent";

interface ParentCountComponentProps {
  init: number;
}

const ParentCountComponent = ({ init }: ParentCountComponentProps) => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Parent Count: {count}</h3>

      <div className="flex gap-4 flex-wrap">
        <ChildCountComponent
          initial={init}
          parentCount={count}
          onIncrement={handleIncrement}
        />
        <ChildCountComponent
          initial={init}
          parentCount={count}
          onIncrement={handleIncrement}
        />
        <ChildCountComponent
          initial={init}
          parentCount={count}
          onIncrement={handleIncrement}
        />
      </div>
    </div>
  );
};

export default ParentCountComponent;
