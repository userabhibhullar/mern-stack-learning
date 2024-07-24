import React, { useState } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import AddTodos from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return (window.location = "/signup");

  return (
    <>
      <AddTodos todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};

export default Todos;
