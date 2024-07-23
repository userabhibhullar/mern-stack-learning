import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "UPDATE_TODO":
      toast.success("todo succesfully updated...", {
        position: "bottom-right",
      });
      return state.map((todo) => {
        if (todo._id === action.todo.data._id) {
          return action.todo.data;
        } else {
          return todo;
        }
      });
    case "CHECK_TODO":
      toast.success("todo status was changed...", {
        position: "bottom-right",
      });
      return state.map((todo) => {
        if (todo._id === action.todo.data._id) {
          return action.todo.data;
        } else {
          return todo;
        }
      });
    case "DELETE_TODO":
      toast.success("todo was deleted...", {
        position: "bottom-right",
      });
      return state.filter((todo) => todo._id !== action.id);
    case "ADD_TODO":
      toast.success("a todo was added...", { position: "bottom-right" });
      return [action.todo.data, ...state];
    default:
      return state;
  }
};

export default todoReducer;
