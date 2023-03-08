import { useState } from "react";

export default function Practice(){
    const [name , setName] = useState("Desmond");
     
  function clickHandler(){
    alert("CLICKED");
    setName("Nwosu");
  }


  return <>
  
  <h1>{name}</h1>
  <input type="text" onChange={e => setName(e.target.value)} value={name} />
  <button onClick={clickHandler}>Submit</button>
  </>
}