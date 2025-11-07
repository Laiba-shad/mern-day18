import React, { useState } from "react";

interface ChildComponentProps {
  initial: number;
  parentCount: number;
  onIncrement: (value: number) => void;
}

const ChildCountComponent = ({
  initial,
  parentCount,
  onIncrement,
}: ChildComponentProps) => {
  const [incre, setIncre] = useState(initial);

  function handleIncrement() {
    setIncre((prev) => prev + 1);
    onIncrement(1);
  }

  return (
    <div className="bg-gray-300 p-4 rounded-xl flex flex-col items-center shadow-md">
      <p className="font-semibold">Child Count: {incre}</p>
      <p className="text-sm text-gray-700">Parent Count: {parentCount}</p>
      <button
        onClick={handleIncrement}
        className="mt-2 bg-green-400 text-white px-3 py-1 rounded-md hover:bg-teal-700 transition"
      >
        + Increase
      </button>
    </div>
  );
};

export default ChildCountComponent;
