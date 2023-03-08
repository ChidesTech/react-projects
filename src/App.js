import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ExpandableActivities from "./challenges/ExpandableActivities";
import FakeStoreApi from "./challenges/FakeStoreApi";
import ReducerCounter from "./challenges/ReducerCounter";
import RenderNestedObject from "./challenges/RenderNestedObject";
import RoboList from "./challenges/RoboList";
import ToggleableSubTasks from "./challenges/ToggleableSubTasks";
import CartLogic from "./challenges/CartLogic";
import Counter from "./challenges/Counter";
import Timer from "./challenges/Timer";
import Practice from "./components/Practice";
import Todolist from "./components/Todolist";
function App() {
  
  return <>
  {/* <Practice/> */}
  <Todolist/>
  </>

    
}
 

export default App;