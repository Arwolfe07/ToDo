const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, user: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, user: null };
    case "SET_LOCATION":
      let obj = JSON.parse(localStorage.getItem("Profile"));
      localStorage.setItem(
        "Profile",
        JSON.stringify({ ...obj, result: action.payload })
      );
      return { ...state, user: { result: action?.data, token: obj.token } };
    default:
      return state;
  }
};

export default userReducer;
