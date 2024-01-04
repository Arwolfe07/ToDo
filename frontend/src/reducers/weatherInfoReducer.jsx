const weatherInfoReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return action.payload;
    case "CLEAR_WEATHER":
      return null;
    default:
      return state;
  }
};

export default weatherInfoReducer;
