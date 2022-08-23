import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Todoform = () => {
    
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const { createTodo } = useContext(TodoContext)
    
   
    const handleSubmit = (e) => {
        e.preventDefault();

        createTodo({
            title,
            description
        });
        setTitle('')
        setDescription('')
        }

    return(
        <div className="max-w-md mx-auto rounded-md" >
            <h1 className=" text-2xl font-bold text-white mb-3 text-center">To do List </h1>
              <form onSubmit={handleSubmit} className= 'bg-slate-800 p-10 mb-4 rounded-md'>
            <input placeholder="To do name"
            autoFocus
            className="bg-slate-300 p-3 w-full mb-2"
            onChange={(e) => setTitle(e.target.value)}
            value={title} />
            <textarea placeholder="To do description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="bg-slate-300 p-3 w-full mb-2"
            > 
            </textarea>
            <button className="bg-indigo-500 px-3 py-1 rounded-md ">Add</button>
        </form>
        </div>
      
    );
}

export default Todoform;