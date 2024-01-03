const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, user: action?.data };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
