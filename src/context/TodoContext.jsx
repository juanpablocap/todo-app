import { createContext, useState, useEffect } from "react";
import { data } from "../data/todo";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([data]);
  const [done, setDone] = useState();

  const checkDone = (todoId) => {
    setDone(todos[todoId].done = !done)
    console.log(todoId, done)
    console.log(todos);
  };

  const createTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: todo.title,
        description: todo.description,
        done: todo.done,
      },
    ]);
    console.log(todos);
  };

  const deleteCard = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    setTodos(data);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        done,
        todos,
        deleteCard,
        createTodo,
        checkDone,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
