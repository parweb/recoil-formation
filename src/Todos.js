import React from "react";

import TodoInput from "./TodoInput";
import TodoAll from "./TodoAll";
import TodoCompleted from "./TodoCompleted";

const Todos = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "20px 1fr"
      }}
    >
      <TodoInput />

      <TodoAll />
      <TodoCompleted />
    </div>
  );
};

export default Todos;
