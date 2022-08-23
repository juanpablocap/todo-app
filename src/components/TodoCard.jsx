import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCard = ({ todo }) => {
  const { deleteCard } = useContext(TodoContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-blod capitalize ">{todo.title}</h1>
      <p className="text-gray-500 text-sm">{todo.description}</p>
      <button
        className="bg-red-500 p-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={() => deleteCard(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
