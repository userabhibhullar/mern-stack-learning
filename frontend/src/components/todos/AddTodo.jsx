import { TextField, Button, autocompleteClasses } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/action/todoActions";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({ name: "", isComplete: false });
  };

  const formStyles = {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  };
  const submitStyles = {
    marginLeft: "20px",
  };
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        style={formStyles}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          id="enter-todo"
          label="enterToDo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) =>
            setTodo((todo) => ({
              ...todo,
              name: e.target.value,
              date: new Date(),
            }))
          }
        />
        <Button
          style={submitStyles}
          color="primary"
          variant="contained"
          type="submit"
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodos;
