import TodoCard from './TodoCard'
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todolist = () => {

  const { todos } = useContext(TodoContext)

  if (todos.length === 0) {
    return <h1 className='text-white text-2xl font-bold text-center'>To do list is empty... </h1>
  }

  return (
  
    <div className='grid grid-cols-4 gap-2 p-4' >
      {todos.map((todo, index) => (
        <TodoCard key={index} todo={todo}  />
      ))}
    </div>
  );
};

export default Todolist;
