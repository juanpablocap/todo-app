import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCard = ({ todo }) => {
  const { deleteCard, checkDone, done } = useContext(TodoContext);


  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-blod capitalize ">{todo.title}</h1>
      <p className="text-gray-500 text-sm">{todo.description}</p>

      <button
        className="bg-red-500 p-2 py-1 rounded-md mt-4 hover:bg-red-300 align-bottom"
        onClick={() => deleteCard(todo.id)}
      >
        Delete
      </button>
      <button className="bg-green-500 p-2 py-1 rounded-md mt-4"  
      onClick={() => checkDone(todo.id)}>
      {todo.done ? <h3>true!!</h3> : <h3>false</h3>}
      </button> 
    </div>
  );
};

export default TodoCard;
