const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "ADD_TODO":
      return [action.todo.data, ...state];
    default:
      return state;
  }
};

export default todoReducer;
