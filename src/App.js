import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FakeStore from "./components/FakeStore";
import Home from "./components/Home";
import TodoApp from "./components/TodoApp";



function App() { 
  return <BrowserRouter>
     <a href="/" className="btn btn-primary m-3">Home</a>
    
  <Routes>
    <Route path="/" element={<Home></Home>}   />
    <Route path="/todo-app" element={<TodoApp></TodoApp>}   />
    <Route path="/fake-store" element={<FakeStore></FakeStore>}   />
  </Routes>

   {/* <h1 className="bg-dark mt-5 p-3 text-center text-white">Footer</h1> */}


  </BrowserRouter>
    
}
 

export default App;