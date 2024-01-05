const initialState = {
  todayTasks: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return { ...state, todayTasks: action.payload };
    case "UPDATE_TASK":
      return {
        ...state,
        todayTasks: state.todayTasks.map((task) => {
          if (action.payload._id === task._id) {
            return action.payload;
          }
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        todayTasks: state.todayTasks.filter(
          (task) => task._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
