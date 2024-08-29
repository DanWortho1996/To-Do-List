// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, {useState} from "react";

function ToDo() {
  //Used for the  State of Tasks
  const [tasks, setTasks] = useState([]);
  //Used for the State of the Input Field/Box
  const [inputValue, setInputValue] = useState("");
  

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  // This will add a new task when inputted/entered
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  //Input/ Type = text is for input method of use, placeholder is the searchbar enter name i.e, "Search Here", "Searchbar"
  return (
    <div className="taskBar">
      <h1>To-Do List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add Your Tasks Here!"/>
      <button onClick={handleAddTask}>Add To List</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;

// const App = () => {
//   // store array of values in the state
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
 
//   // functions to add a new item to the end of the array stored in the state
//   const handleAddNumber = () => {
//     // first create a copy of the array in the state using the spread operator and store it in a new variable
//     let storedNumbers = [...numbers];
//     // make any changes you want to the copy of the array
//     storedNumbers.push(numbers[numbers.length - 1] + 1);
//     // set the copy/updated array as the new state value using the function we declared in the state hook
//     setNumbers(storedNumbers)
//   };
 
//   return (
//     <div>
//       {/* generate a p tag for each item in the array and display that number */}
//       {numbers.map((number, index) => {
//         return <p key={index}>{number}</p>
//       })}
//       {/* button to add a new number when clicked */}
//       <button onClick={handleAddNumber}>Add a Number!</button>
//     </div>
 
//   );
// }
 
// export default App

