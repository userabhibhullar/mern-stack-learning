import { TextField, Button, autocompleteClasses } from "@mui/material";
import { Send } from "@mui/icons-material";

const AddTodos = () => {
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
      <form noValidate autoComplete="off" style={formStyles}>
        <TextField
          variant="outlined"
          id="enter-todo"
          label="enterToDo"
          autoFocus
          fullWidth
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
