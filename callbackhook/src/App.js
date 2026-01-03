import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import ListFun from './ListFun';

function App() {
  const [value, setValue] = useState(true);
  const [count, setCount] = useState(0);
   const handleClick = useCallback((a) => {
    return [count + a, count + a + 1, count + a + 2];
   },[count])
   const theme = {
    backgroundColor: value?'black' :'',
    color: value?'white':'',}
  return (
    <div style={theme}>
     <input value={count} onChange={(e) => setCount(e.target.value)}/>
     <ListFun handleClick={handleClick}/>
     <button onClick={() => {setValue(value => !value)}}>Click Me</button>
    </div>
  );
}

export default App;
