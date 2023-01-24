import { useState } from "react";
import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";

function App() {
  // useState for the list of todo items
  const [todo, setTodo] = useState([]);
  // useState for the value of the new todo item input
  const [newTodo, setNewTodo] = useState();
  // function to handle the submission of a todo item in the form
  function handleSubmit(event) {
    event.preventDefault();
    // add new todo to the todo list
    setTodo([...todo, newTodo]);
    // clears the input
    setNewTodo("");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="App-header text-center">To-Do List</h1>
        {/* render AddToDo compoent to be able to use props */}
        <AddToDo
          todo={todo}
          handleSubmit={handleSubmit}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
        />
        {/* {todo.map((todo, index) =>
          <AddToDo key={index} todo={todo} handleSubmit={handleSubmit} />
        )} */}
      </div>
    </>
  );
}
export default App;
