import { useReducer } from "react"
import { useState } from "react"

export default function Counter(){
 let initialState = 0;

 const reducer = (state, action) => {
//    if(action === "increase") return state + 1;
//    if(action === "decrease") return state - 1;
//    if(action === "reset") return initialState;

      switch(action){
        case "increase":
            return state + 1;
        case "decrease":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;            
      }
 }

 

 const [count, dispatch] = useReducer(reducer, initialState)



    return <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increase")}>Increase</button>
        <button onClick={() => dispatch("decrease")}>Descrease</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
}