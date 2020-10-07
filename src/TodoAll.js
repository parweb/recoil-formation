import React from "react";
import { useRecoilValue } from "recoil";

import * as $todo from "./$todo";
import TodoItem from "./TodoItem";

const TodoCompleted = () => {
  const incompleted = useRecoilValue($todo.where({ completed: false }));

  return (
    <section>
      <h3>todo</h3>
      <div>
        {incompleted.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default TodoCompleted;
