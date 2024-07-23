import axios from "axios";
import { url } from "../../api/index";
import { toast } from "react-toastify";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({
          type: "GET_TODOS",
          todos,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, { position: "bottom-right" });
      });
  };
};

export const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/todos`, newTodo)
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, { position: "bottom-right" });
      });
  };
};

export const updateTodo = (updatedTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/todos/${id}`, updatedTodo)
      .then((todo) => {
        dispatch({
          type: "UPDATE_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, { position: "bottom-right" });
      });
  };
};

export const checkTodo = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/todos/${id}`, {})
      .then((todo) => {
        dispatch({
          type: "CHECK_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, { position: "bottom-right" });
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/todos/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, { position: "bottom-right" });
      });
  };
};
