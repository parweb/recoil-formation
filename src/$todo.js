import { atom, selector, selectorFamily } from "recoil";

export const all = atom({
  key: "todo-all",
  default: []
});

export const input = atom({
  key: "todo-input",
  default: ""
});

export const insert = selector({
  key: "todo-insert",
  set: ({ set }, value) => {
    set(all, (todos) => [...todos, value]);
  }
});

export const where = selectorFamily({
  key: "todo-where",
  get: (where) => ({ get }) =>
    get(all).filter((todo) =>
      Object.entries(todo).reduce((carry, [key, value]) => {
        if ([true, false].includes(where[key])) {
          if (value === where[key]) {
            return carry && true;
          }

          return carry && false;
        }

        return carry;
      }, true)
    )
});

export const find = selectorFamily({
  key: "todo-find",
  get: (conditions) => ({ get }) => get(where(conditions))[0]
});

export const remove = selector({
  key: "todo-remove",
  set: ({ set }, { id }) => {
    set(all, (todos) => todos.filter((todo) => todo.id !== id));
  }
});

export const edit = selector({
  key: "todo-edit",
  set: ({ set }, { id, ...props }) => {
    set(all, (todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, ...props } : todo))
    );
  }
});
