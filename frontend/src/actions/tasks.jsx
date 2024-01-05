import * as api from "../apis/backendApi";

export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    dispatch({ type: "FETCH_TODO", payload: data.tasks });
  } catch (error) {
    console.log(error);
  }
};

export const addNewTask = (taskData) => async (dispatch) => {
  try {
    const { data } = await api.addNewTask(taskData);
    dispatch({ type: "FETCH_TODO", payload: data.tasks });
    dispatch({ type: "SET_MESSAGE", payload: "Task Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const taskDone = (id) => async (dispatch) => {
  try {
    const { data } = await api.taskDone(id);
    dispatch({ type: "UPDATE_TASK", payload: data.task });
    dispatch({ type: "SET_MESSAGE", payload: "Task Updated" });
  } catch (error) {
    console.log(error);
  }
};

export const taskNotDone = (id) => async (dispatch) => {
  try {
    const { data } = await api.taskNotDone(id);
    dispatch({ type: "UPDATE_TASK", payload: data.task });
    dispatch({ type: "SET_MESSAGE", payload: "Task Updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id)=>async(dispatch)=>{
    try {
        
        const { data } = await api.deleteTask(id);
        console.log(data)
        dispatch({ type: "DELETE_TASK", payload: data.task });
        dispatch({ type: "SET_MESSAGE", payload: "Task Deleted" });
      } catch (error) {
        console.log(error);
      }   
}