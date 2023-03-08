import { useState } from "react";

export default function Todolist() {

    // Creating a Todolist
    // 1. Create a useState for todo and a useState for array list of todos
    const [todo, setTodo] = useState("");  //empty string
    const [todos, setTodos] = useState([]); //empty array 
    // 2. Attach onChange event handler to the input - check input in jsx
    // 3. Attach onClick event handler function to the button - check button in jsx
    function clickHandler() {
        // 4. With each click of the button, add the new todo to the previous array of todos
        setTodos([...todos, todo])  //spread operator (...)
       
    }
    // 5. Map through the array of todos and display them on the ui - check the jsx

    return <>
        <div className="todolist">

            <div className="todolist-header">
                <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className="todolist-input" />
                <button onClick={clickHandler} className="todolist-button">Add</button>
            </div>

            <div className="todolist-body">
                {
                todos.map(x => {
                    return <div className="todo">{x}</div>
                })
                }
                
               
            </div>




        </div>

    </>
}