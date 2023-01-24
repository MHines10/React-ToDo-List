import React from "react";
// component to add to the todo list
export default function AddToDo(props) {
  return (
    <>
      {/* form to accept input for todo list */}
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <input
          type="text"
          value={props.newTodo}
          onChange={(event) => props.setNewTodo(event.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* unordered list to show the todo list inputs */}
      <ul>
        {props.todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
