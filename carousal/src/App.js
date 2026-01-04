import React, { useState } from "react";
import "./App.css";

function App() {
  const Images = [
    "/carosal1.jpg",
    "/carosal2.jpg",
    "/carosal3.jpg",
  ]
  const [currentIdx, setcurrentIdx] = useState(0)
  const handlePrev=()=>{
    setcurrentIdx((prev)=>
    prev===0 ? Images.length - 1 : prev-1)
  }
  const handleNext=()=>{
    setcurrentIdx((prev)=>
    prev===Images.length-1 ? 0 : prev+1)
  }
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
      
      <button style={{ padding: "10px 20px" }} onClick={handlePrev}>Previous</button>
      
      <img src={Images[currentIdx]} alt="carousel" style={{ width: "300px", height: "auto" }} />
      
      <button style={{ padding: "10px 20px" }} onClick={handleNext}>Next</button>
      
    </div>
  );
}

export default App;
