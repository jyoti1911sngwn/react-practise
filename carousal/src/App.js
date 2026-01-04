import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
const Image = [
  'carosal1.jpg',
  'carosal2.jpg',
  'carosal3.jpg'
]
const[current, setCurrent ] = useState(0)
const handlePrev=()=>{
  setCurrent((prev)=>
    prev === 0 ? Image.length-1 : prev-1
  )
}
const handleNext=()=>{
  setCurrent((prev)=>
  prev ===Image.length-1 ? 0 : prev+1)
}
useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrent((prev) =>  prev ===0 ? Image.length-1 : prev-1)
  },300)
  return ()=> clearInterval(interval)
},[])
  return (
   <div className="App" style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center', gap: '20px'}}>
    <button style={{padding: '10px 20px'}} onClick={handlePrev}>Prev</button>
    <img src={Image[current]} style={{height: '1000px'}}/>
    <button style={{padding: '10px 20px'}} onClick={handleNext}>Next</button>
   </div>
  );
}

export default App;
