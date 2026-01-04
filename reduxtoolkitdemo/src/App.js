import logo from './logo.svg';
import './App.css';
import { use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement } from './redux/slices/counter';

function App() {
  const count = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h1 style={{color:'black'}}>current value: {count}</h1>
     <button onClick={()=> dispatch(increment())}>Increment</button>
     <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
