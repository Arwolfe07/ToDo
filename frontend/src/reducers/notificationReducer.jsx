const notificationReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { message: action.payload };
    case 'CLEAR_MESSAGE':
      return { message: "" };
    default:
      return state;
  }
};

export default notificationReducer;