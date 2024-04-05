import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //handle input change
  const submitHandler = (e) => {
    //prevent default form submission behavior
    e.preventDefault();
      //add todo
      addTodo(value);
      // clear form after submission
      setValue("");
  };

  return (
    <form className="todoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todoInput"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todoBtn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
