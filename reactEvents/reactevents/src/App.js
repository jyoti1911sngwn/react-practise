import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div onClick={() => console.log("Parent")}>
  <button
    onClick={(e) => {
      e.stopPropagation();
      console.log("Child");
    }}
  >
    Click
  </button>
</div>

    </div>
  );
}

export default App;
