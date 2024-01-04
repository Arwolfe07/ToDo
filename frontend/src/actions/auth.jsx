import * as api from "../apis/backendApi";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(authData);
    dispatch({ type: "AUTH", data });
    dispatch({
      type: "SET_CURRENT_USER",
      payload: JSON.parse(localStorage.getItem("Profile")),
    });
    navigate("/todo", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({type: 'SET_MESSAGE',payload: error?.response?.data.message})
  }
};

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: "AUTH", data });
        dispatch({
          type: "SET_CURRENT_USER",
          payload: JSON.parse(localStorage.getItem("Profile")),
        });
        navigate("/todo", { replace: true });
      } catch (error) {
        console.log(error)
        dispatch({type: 'SET_MESSAGE',payload: error?.response?.data.message})
      }
};

export const updateLocation = (locationData)=>async(dispatch)=>{
  try {
    const { data } = await api.updateLocation(locationData);
    dispatch({ type: "SET_LOCATION",payload: data });
    dispatch({
      type: "SET_CURRENT_USER",
      payload: JSON.parse(localStorage.getItem("Profile")),
    });
  } catch (error) {
    console.log(error)
    dispatch({type: 'SET_MESSAGE',payload: error?.response?.data.message})
  }
}


