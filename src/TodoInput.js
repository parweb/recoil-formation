import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import * as $todo from "./$todo";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");

  const todos = useRecoilValue($todo.all);
  const insert = useSetRecoilState($todo.insert);

  const onAdd = useCallback(() => {
    insert({
      id: todos.length,
      text: newTodo,
      completed: false
    });
    setNewTodo("");
  }, [newTodo, todos, insert, setNewTodo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd();
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px",
        gridTemplateRows: "1fr"
      }}
    >
      <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
      <button style={{ textAlign: "center" }}>add</button>
    </form>
  );
};

export default TodoInput;
