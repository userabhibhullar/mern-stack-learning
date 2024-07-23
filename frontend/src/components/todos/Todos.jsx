import React, { useState } from "react";
import AddTodos from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });
  return (
    <>
      <AddTodos todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};

export default Todos;
