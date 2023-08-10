import React,{useState,useReducer} from "react";
import "./style.css";

const reducer = (state,action) =>{
  let newState;
  switch(action.type){
    case 'increment':
      newState = {...state,counter : state.counter+1};
      break;
    case 'toggle':
      newState = {...state,toggleView : !state.toggleView};
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}

export default function App() {
  //code for use state
  const [counter,setCounter] = useState(0);
  const increment = ()=>{
    setCounter(counter+1)
  }
  // code for usereducer
  const initialState = {
    counter:0,
    toggleView:true
  }
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
    <div>
      <h1>Hello StackBlitz! an example of useState</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>click me to increment</button>      
    </div>
    <hr/>
    <div>
      <h1 style={{color:"red"}}>Hello StackBlitz! an example of useReducer</h1>
      <h2>{state.counter}</h2>
      <button onClick={()=>{dispatch({type:'increment'});dispatch({type:'toggle'})}}>click me to increment</button>     
      {
        state.toggleView?<h1>you can see me</h1>:""
      } 
    </div>
   </div> 
  );
}
