import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  MdFormatListBulletedAdd,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import TaskContainer from "../TasksContainer";
import { addNewTask } from "../../actions/tasks";

const TasksSection = () => {
  const [task, setTask] = useState('');
  const user = useSelector((state) => state.currentUserReducer);
  const {todayTasks} = useSelector(state =>state.todoReducer);
  const dispatch = useDispatch();

  const addTaskHandler =()=>{
    if (!task) {
      return dispatch({type: "SET_MESSAGE", payload: "Write the task first"});
    }
    if(todayTasks?.length===10){
      return dispatch({type: "SET_MESSAGE", payload: "10 tasks already noted"});
    }
    dispatch(addNewTask({title: task, date: moment().format("DD/MM/YYYY")}))
  }

  return (
    <div className="w-2/3 px-4">
      <header className="tracking-tight text-center">
        <h1 className="text-2xl font-bold">
          Welcome <span className="text-primary">{user?.result?.name}</span>
        </h1>
        <h2 className="text-xl font-semibold">
          Here is the list of <span className="text-primary">tasks</span> for
          today{" "}
          <span className="text-primary font-bold">
            ({moment().format("DD/MM/YYYY")})
          </span>
        </h2>
      </header>
      <div className="flex items-center justify-center my-2">
        <label htmlFor="task-add" className="sr-only">
          Search
        </label>
        <div className="relative w-1/2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdFormatListBulletedAdd className="text-xl font-bold" />
          </div>
          <input
            type="text"
            id="task-add"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add upto 10 most important tasks..."
            onChange={(e)=>setTask(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-other focus:ring-4 focus:outline-none focus:ring-orange-300"
          onClick={addTaskHandler}
        >
          <FaPlus className="text-xl font-bold"/>
          Add
        </button>
      </div>
        <TaskContainer/>
    </div>
  );
};

export default TasksSection;
