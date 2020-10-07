import React from "react";
import { useRecoilValue } from "recoil";

import * as $todo from "./$todo";
import TodoItem from "./TodoItem";

const TodoCompleted = () => {
  const completed = useRecoilValue($todo.where({ completed: true }));

  return (
    <section>
      <h3>completed</h3>
      <div>
        {completed.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default TodoCompleted;
