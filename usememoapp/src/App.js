import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [click, setClick] = useState(false);
  const [num, setNum] = useState(0);
  const theme = {
    backgroundColor: click ? 'black' : 'white',
    color: click ? 'white' : 'black',
  }
  const handleClick = useMemo(() => {
   return slowFunction(num)
  },[num])
  return (
    <div>
      <input onChange={e=>setNum(parseInt(e.target.value))}/>
      <button onClick={()=>setClick(prev => !prev)}>Click</button>
      <div style={theme}>{handleClick}</div>
      </div>
  );
}

function slowFunction(num){
  for(let i=0;i<1000000000;i++){
  }
  return num*2
}
export default App;
