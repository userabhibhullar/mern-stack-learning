import { TextField, Button, autocompleteClasses } from "@mui/material";
import { Send } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/action/todoActions";

const AddTodos = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: "Abhi",
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }
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
