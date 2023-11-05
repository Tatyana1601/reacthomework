import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import './App.css';

function App() {
const dispatch = useDispatch();
const counter = useSelector((store)=>store.counter);


const handleIncrement = ()=>{
  dispatch(increment());
}

const handleDecrement = ()=>{
  dispatch(decrement());
}

  return (
    <div className='App'>
      <h1>Counter value:{counter.value}</h1>
      <button className='button' onClick={handleIncrement}>Increment</button>
      <button className='button' onClick={handleDecrement}>Decrement</button>

    </div>
  )
}
export default App;
