import React from "react";
import { Typography, Button, ButtonGroup } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import moment from "moment";
const Todo = ({ setTodo, todo }) => {
  const handleUpdateClick = () => {
    setTodo(todo);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const todoStyles = {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  };
  const grayStyle = {
    color: "#8f8f8f",
  };
  const isCompleteStyle = {
    color: "green",
  };
  const checked = {
    textDecoration: "line-through",
  };
  return (
    <>
      <div style={todoStyles}>
        <div>
          {todo.isComplete ? (
            <Typography style={checked} variant="subtitle1">
              {todo.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{todo.name}</Typography>
          )}
          <Typography style={grayStyle} variant="body2">
            Author: Abhi
          </Typography>
          <Typography style={grayStyle} variant="body2">
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button>
              {todo.isComplete ? (
                <CheckCircle style={isCompleteStyle} color="action" />
              ) : (
                <CheckCircle color="action" />
              )}
            </Button>
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Todo;
