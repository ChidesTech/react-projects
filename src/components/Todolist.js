import { useEffect } from "react";
import { useState } from "react";


export default function Todolist() {
    // State to store each todo
    const [todo, setTodo] = useState("");
    //State to store all todos
    const [todos, setTodos] = useState([]);

    function clickHandler() {
        //check if input is empty
        if (todo === "") {
            alert("Please enter a text");
            return; //stops your code from running
        }
        setTodos([...todos,  {id : Date.now() , text : todo}]);
        setTodo("");

    }


    function deleteHandler(id){
       //filter method
       setTodos(todos.filter(x =>  x.id !== id ))

    }

    // useEffect(() =>{
      
    //     let players = [
    //         {number : 10, name : "Messi"},
    //         {number : 7, name : "Ronaldo"},
    //         {number : 23, name : "Martinez"},
    //         {number : 1, name : "Lloris"},
    //         {number : 10, name : "Modric"},
    //         {number : 7, name : "Mbappe"},
    //         {number : 8, name : "Xavi"},
    //         {number : 10, name : "Neymar"}, 
    //     ]
  
    //  let numberPlayers = players.filter(x => x.number !== 10 );
    //  console.log(numberPlayers);

    // },[])

    return <>
        <div className="todolist">
            <div className="todolist-header d-flex justify-content-center w-75 p-5 mx-auto mt-3 border rounded">
                <input value={todo} onChange={e => setTodo(e.target.value)} className="w-75 px-2 py-3 fs-5 me-3 rounded" type="text" placeholder="Enter New Todo" />
                <button onClick={clickHandler} className="btn btn-primary w-25 px-2 py-3 fs-5 rounded ">Add Todo</button>
            </div>
            <div className="todolist-body w-75 mx-auto mt-3">
                {todos.map(x => {
                    return <div key = {x.id}  className="todo p-3 fs-5 bg-primary text-white mb-1 rounded d-flex justify-content-between">
                       {x.text}
                        <span onClick={() => deleteHandler(x.id)} className="btn btn-danger">Delete</span>
                    </div>

                })}
            </div>
        </div>

    </>
}