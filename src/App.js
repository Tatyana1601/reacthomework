
import './App.css';
import { useState } from 'react';
function App() {

  const [value, setValue] = useState(0);
  const incrementCount = ()=> {
    setValue (value + 1);
  };
  const descrementCount = ()=> {
    setValue (value - 1);
  };
  const resetCount = ()=> {
    setValue(0);
  };
  return(
    <div>
      <h1>Count: {value}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={descrementCount}>Descrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}


export default App;
