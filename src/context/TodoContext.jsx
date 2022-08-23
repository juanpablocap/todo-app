import { createContext, useState, useEffect } from "react";
import { data } from "../data/todo";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([data]);

  const createTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: todo.title,
        description: todo.description,
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
        todos,
        deleteCard,
        createTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
