import React from "react";
import { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  //submit handler after change or on submit
  const submitHandler = (e) => {
    //prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };

  return (
    <form className="todoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todoInput"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todoBtn">
        Update Tasky
      </button>
    </form>
  );
};

export default EditTodoForm;
