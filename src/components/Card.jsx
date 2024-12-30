import React, { useState } from "react";
import useTodoData from "../contexts/TodoData";
import useTheme from "../contexts/ThemeSwitch";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete, MdSave } from "react-icons/md";

const Card = ({ propTodo }) => {
  const { removeTodoData, editTodo, toggelComplete } = useTodoData();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { colorTheme } = useTheme();
  const [newTodo, setNewTodo] = useState(propTodo.todo);

  const updateTodo = () => {
    setIsTodoEditable(false);
    console.log({ ...propTodo, todo: newTodo }, 'cardComp');
    editTodo(propTodo.todoId, { ...propTodo, todo: newTodo });
  };

  const color =
  propTodo.priority === "High"
      ? "red-400"
      : propTodo.priority === "Medium"
      ? "yellow-400"
      : "green-400";

  const buttonClass = `
    ${propTodo.completed ? `bg-green-400` : `bg-${colorTheme}`} 
    transition-colors
  `;

  return (
    <>
      <div className="mb-5 relative p-4 bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg rounded-lg w-full transition-all">
        <div className="flex gap-4 h-full">
          <div className="w-8 flex justify-center items-center h-full">
            <div
              className={`h-8 w-8 shadow-md dark:border-white bg-${color} rounded-full`}
            ></div>
          </div>

          <div className="text-start mb-2">
            <h3
              className={`text-xl font-bold text-${colorTheme} whitespace-nowrap ${
                !isTodoEditable ? "block" : propTodo.completed ? "block" : "hidden"
              }`}
            >
              {/* {JSON.stringify(propTodo.todo)} */}
              {propTodo.todo}
            </h3>
            <input
              type="text"
              className={`ml-2 dark:bg-neutral-700 bg-gray-100 dark:text-gray-200 text-gray-900 text-sm rounded-md p-1 focus:ring-1 block w-full p-2.5",
              focus:ring-red-500 focus-visible:outline ${
                isTodoEditable
                  ? "block border-black/10"
                  : "hidden border-transparent"
              } ${propTodo.completed ? "hidden" : "block"}`}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <p className={`text-sm text-gray-500 font-medium`}>
              Priority: 
              <span className={`font-semibold ml-1 text-${color}`}>
                {propTodo.priority}
              </span>
            </p>
            <div className="flex gap-6">
              <p className="text-xs mt-0.5 text-gray-500 font-medium">
                Added Date: {propTodo.addDate}
              </p>
              <p className={`${propTodo.completed ? "block" : "hidden"} text-xs mt-0.5 text-gray-500 font-medium`}>
                Complete Date: {propTodo.endDate}
              </p>
            </div>
          </div>

          <button
            className={`flex ml-4 items-center gap-1 h-fit rounded-md px-4 py-1 text-xs font-medium ${isTodoEditable ? "text-green-600" : "text-blue-700"} ${isTodoEditable ? "bg-green-100" : "bg-blue-50"} ring-1 ring-inset ring-red-600/10 cursor-pointer ${propTodo.completed ? "hidden" : "block"}`}
            onClick={() => {
              if (propTodo.completed) return;
              if (isTodoEditable) {
                updateTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
          >
            <span className="-mt-0.5">{isTodoEditable ? "Save" : "Edit"}</span>
            {isTodoEditable ? <MdSave /> : <BsPencilSquare /> }
            
            {/* <span className="-mt-0.5">Edit</span>
             */}
          </button>
        </div>

        <button
          className={`absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 mt-2 text-sm font-semibold text-white rounded-full ${buttonClass} hover:bg-opacity-80`}
          onClick={() => toggelComplete(propTodo.todoId)}
        >
          {propTodo.completed ? "Completed ✅" : "Mark as Complete ⌚"}
        </button>

        <div
          onClick={() => removeTodoData(propTodo.todoId)}
          className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full bg-red-50 px-1.5 py-1.5 text-base font-medium text-red-700 ring-1 ring-inset ring-red-600/70 cursor-pointer"
        >
          <MdDelete />
        </div>
      </div>
    </>
  );
};

export default Card;
