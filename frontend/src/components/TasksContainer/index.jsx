import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { deleteTask, taskDone, taskNotDone } from "../../actions/tasks";

const TaskContainer = () => {
  const { todayTasks } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const markDoneHandler = (id) => {
    dispatch(taskDone({ taskId: id }));
  };
  const notDoneHandler = (id) => {
    dispatch(taskNotDone({ taskId: id }));
  };
  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
  };
  const completedTask = todayTasks?.filter((task) => task.completed === true);
  return (
    <>
      <p className="text-md text-gray-700 text-center font-extralight mb-2">
        <span className="font-bold">
          {todayTasks.length - completedTask.length}
        </span>{" "}
        pending tasks, <span className="font-bold">{completedTask.length}</span>{" "}
        completed
      </p>
      <table className="table lg:w-3/4 mx-auto mb-12 w-full">
        <thead>
          <tr>
            <th className="text-center px-1 py-2 bg-primary text-orange-100 rounded-tl-xl">
              #
            </th>
            <th className="text-left px-1 py-2 bg-orange-500 text-orange-100">
              Details
            </th>
            <th className=" px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {todayTasks.length === 0 ? (
            <tr className="odd:bg-orange-100 even:bg-orange-800">
              <td
                className="px-1 py-2 text-center font-bold tracking-tight"
                colSpan="3"
              >
                No tasks found. Add new tasks to begin with.
              </td>
            </tr>
          ) : (
            todayTasks.map((todo, index) => (
              <tr
                key={todo._id}
                className={
                  "transition duration-300 " +
                  (!todo.completed
                    ? " odd:bg-orange-100 even:bg-orange-50 "
                    : " bg-green-100 line-through ")
                }
              >
                <td className="text-center px-1 py-2 text-orange-800">
                  {index + 1}
                </td>
                <td className="px-1 py-2 text-orange-800">{todo.title}</td>
                <td className="flex justify-around text-center text-lg px-1 py-2">
                  {!todo.completed ? (
                    <FaCheck
                      className="text-green-700 cursor-pointer"
                      onClick={() => markDoneHandler(todo._id)}
                    />
                  ) : (
                    <RxCross1
                      className="cursor-pointer"
                      onClick={() => notDoneHandler(todo._id)}
                    />
                  )}
                  <RiDeleteBin5Line
                    className="text-red-700 cursor-pointer"
                    onClick={() => deleteTaskHandler(todo._id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default TaskContainer;
