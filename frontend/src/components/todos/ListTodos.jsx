import React, { useState } from "react";
import { Typography } from "@mui/material";
import Todo from "./Todo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/action/todoActions";

const ListTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const todosStyles = {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  };
  return (
    <>
      <div style={todosStyles}>
        <Typography variant="h5">
          {todos.length > 0 ? "theTodos;" : "noTodosYet"}
        </Typography>
        {todos &&
          todos.map((todo) => {
            return <Todo todo={todo} key={todo._id} />;
          })}
      </div>
    </>
  );
};

export default ListTodos;
