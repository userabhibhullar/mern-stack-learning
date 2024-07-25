import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import AddTodos from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth._id) {
      navigate("/signup");
    }
  }, [auth, navigate]);

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return null;

  return (
    <>
      <AddTodos todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};

export default Todos;
