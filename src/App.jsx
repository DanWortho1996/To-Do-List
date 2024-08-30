// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useContext } from 'react';
// import './App.css'
// import React, {useState} from "react";


//Activity 2 To-Do-List (Add & Remove Completed, STILL TO-DO = Check-Box)
// const TodoList = () => {
//   //Uses the State to keep track of input value and list of tasks
//   const [inputValue, setInputValue] = useState('');
//   const [todos, setTodos] = useState([]);
//   // const [Check, TodoList] = useContext([])

//   //Handle input change
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   //This adds a task to the list
//   const handleAddTask = () => {
//     //Avoids adding empty tasks
//     if (inputValue.trim() !== '') {
//       //Adds new task to the list
//       setTodos([...todos, inputValue]);
//       //Clears input field after adding
//       setInputValue('');
//     }
//   };

//   //Removes the last task from the list
//   const removeLastTask = () => {
//     if (todos.length > 0) {
//       //Removes the last item shown on the list by 1
//       setTodos(todos.slice(0, -1));
//     }
//   };

//   //Input/ Type = text is for input method of use, placeholder is the searchbar enter name i.e, "Search Here", "Searchbar"
//   return (
//     <div className="taskBar">
//       <h1>To-Do List</h1>
//       <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add Your Tasks Here!"/>
//       <br></br>
//       <button onClick={handleAddTask}>Add To Your List</button>
//       <br></br>
//       <button onClick={removeLastTask}>Remove Your Last Task</button>
//       <ol>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default TodoList;

//The Numbers Activity
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


//Activity 2 (Completed)
import React, { useState } from 'react';
import './App.css'

const TodoList = () => {
  //Use State to keep track of input value and list of tasks
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  //Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Add a task to the list
  const handleAddTask = () => {
    //Avoid adding empty tasks
    if (inputValue.trim() !== '') {
      //Adds new task to the list with 'completed' status
      setTodos([...todos, { text: inputValue, completed: false }]);
      //Clears input field after adding
      setInputValue('');
    }
  };

  //Remove the last task from the list
  const removeLastTask = () => {
    if (todos.length > 0) {
      //Removes the last item shown on the list by 1
      setTodos(todos.slice(0, -1));
    }
  };

  //Handles the checkbox changes to toggle 'completed' status on click #ChatGPT helped with this check box issue.
  const handleCheckboxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  //Input/ Type = text is for input method of use, placeholder is the searchbar enter name i.e, "Search Here", "Searchbar"
  return (
    <div className="taskBar">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add Your Tasks Here!"
      />
      <br />
      <button onClick={handleAddTask}>Add To Your List</button>
      <br />
      <button onClick={removeLastTask}>Remove Your Last Task</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
