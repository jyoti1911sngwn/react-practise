import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(count)
    
    return ()=>{
      console.log("i am cleaned")
      //timeouts
      //no longer needed components
    }
  },[count])
  return (
    <div className="App">
     <button onClick={()=>{setCount(count+1)}}>increase</button>
     {count}
      <button onClick={()=>{setCount(count-1)}}>decrease</button>
    </div>
  );
}

export default App;
