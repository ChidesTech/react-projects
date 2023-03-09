import { useState } from "react";


export default function Todolist() {
    // State to store each todo
  const [todo, setTodo] = useState("");
  //State to store all todos
  const [todos, setTodos] = useState([]);

  function clickHandler(){
    //check if input is empty
    if(todo === ""){
        alert("Please enter a text");
        return; //stops your code from running
    }
   setTodos([...todos, todo]);
   setTodo("");
  }

    return <>
        <div className="todolist">
            <div className="todolist-header d-flex justify-content-center w-75 p-5 mx-auto mt-3 border rounded">
                <input value={todo} onChange={e => setTodo(e.target.value)} className="w-75 px-2 py-3 fs-5 me-3 rounded" type="text" placeholder="Enter New Todo" />
                <button onClick={clickHandler} className="btn btn-primary w-25 px-2 py-3 fs-5 rounded ">Add Todo</button>
            </div>
            <div className="todolist-body w-75 mx-auto mt-3">
                {todos.map(x => {
                    return   <div className="todo p-3 fs-5 bg-primary text-white mb-1 rounded">{x}</div>

                })}
               
                
            </div>
        </div>

    </>
}