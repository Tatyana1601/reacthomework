import { useState, createContext } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

export const Context = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const handleAddNewTasks = () => {
    const items = [...tasks, name];
    setTasks(items)
  };
  return (
    <Context.Provider value={tasks}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button className='button' onClick={handleAddNewTasks}>Create new tasks</button>
      <Tasks />
    </Context.Provider>
  )
}
export default App;
