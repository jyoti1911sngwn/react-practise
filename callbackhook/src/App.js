import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListFun from "./ListFun";

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const handleClick = (a) => {
    return [count + a, count + a + 1, count + a + 2];
  };
  //     const handleClick = useCallback((a) => {
  //   return [count + a, count + a + 1, count + a + 2];
  //  }, [count])
  return (
    <div className="App">
      <input
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <ListFun handleClick={handleClick} />
      <button
        onClick={() => {
          setValue(() => {
            console.log("rendering");
          });
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
