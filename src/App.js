import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [counter,setCounter] = useState(0);
  const increment = ()=>{
    setCounter(counter+1)
  }
  return (
    <div>
      <h1>Hello StackBlitz! an example of useState</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>click me to increment</button>
    </div>
  );
}
