import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";
import "./App.css";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Todoform />
        <Todolist />
      </div>
    </main>
  );
}

export default App;
