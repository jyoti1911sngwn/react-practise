import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const{theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
    <div style={{backgroundColor: theme ==="light" ? 'black':'white'}}>
      <button onClick={toggleTheme}></button>
    </div>
    </>
  );
}

export default App;
