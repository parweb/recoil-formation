import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import * as $todo from "./$todo";

const TodoItem = ({ id }) => {
  const todo = useRecoilValue($todo.find({ id }));

  const remove = useSetRecoilState($todo.remove);
  const edit = useSetRecoilState($todo.edit);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "30px 1fr",
        gridTemplateRows: "1fr",
        gap: "5px",
        marginBottom: "4px"
      }}
    >
      <button
        style={{ textAlign: "center" }}
        onClick={() => {
          remove({
            id: todo.id
          });
        }}
      >
        x
      </button>
      <div
        style={{ color: todo.completed ? "red" : "black" }}
        onClick={() => {
          edit({ id: todo.id, completed: !todo.completed });
        }}
      >
        {todo.text}
      </div>
    </div>
  );
};

export default TodoItem;
