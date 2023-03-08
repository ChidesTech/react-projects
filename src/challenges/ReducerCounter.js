import { useReducer } from "react"

export default function ReducerCounter(){
const initialState = 0;
const reducer = (state = 0, action) =>{
   switch(action){
    case "increment":
        return state + 1;
    case "decrement":
        return state - 1;
    case "reset":
        return initialState;
    default:
        return state;            
   }
}
  const [count, dispatch] =  useReducer(reducer, initialState)
 return   <div>
    <div>{count}</div>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
}