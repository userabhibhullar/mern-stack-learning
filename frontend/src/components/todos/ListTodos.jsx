import React from "react";
import { Typography } from "@mui/material";
import Todo from "./Todo";

const ListTodos = () => {
  const todosStyles = {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  };
  return (
    <>
      <div style={todosStyles}>
        <Typography variant="h5">theTodos;</Typography>
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default ListTodos;
