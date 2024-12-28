import React, { useState } from "react";
import { clsx } from "clsx";
import useTheme from "../contexts/ThemeSwitch";
import useTodoData from "../contexts/TodoData";

const AddTodoForm = () => {
  const { colorTheme } = useTheme();
  const { addTodo } = useTodoData();
  const themes = [
    { color: "bg-green-300", label: "Low" },
    { color: "bg-yellow-300", label: "Medium" },
    { color: "bg-red-300", label: "High" },
  ];

  const [formTodo, setFormTodo] = useState({
    todo: "",
    completed: false,
    priority: "low",
  });

  const handleClick = (eve) => {
    eve.preventDefault();
    addTodo(formTodo)
    setFormTodo({ todo: "", completed: false, priority: themes[0].label });
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="todoName"
          className={clsx(
            "block mb-2 text-sm font-medium",
            `text-${colorTheme}`
          )}
        >
          Enter Todo
        </label>
        <input
          value={formTodo.todo}
          onChange={(e) => {
            setFormTodo({ ...formTodo, todo: e.target.value });
          }}
          type="text"
          id="todoName"
          className={clsx(
            "bg-gray-50 text-gray-900 text-sm rounded-lg border focus:ring-1 block w-full p-2.5",
            `border-${colorTheme} focus:ring-${colorTheme} focus-visible:outline-none`
          )}
          placeholder="Todo"
          required
        />
      </div>

      <div>
        <label
          htmlFor="dropdown"
          className={clsx(
            "block mb-2 text-sm font-medium",
            `text-${colorTheme}`
          )}
        >
          Priority{" "}
        </label>
        <select
          id="dropdown"
          className={clsx(
            "p-2.5 mt-2 block w-full bg-gray-50 focus:ring rounded-md shadow-sm sm:text-sm border",
            `border-${colorTheme} focus:ring-${colorTheme} focus-visible:outline-none`
          )}
          value={formTodo.priority}
          onChange={(e) => {
            setFormTodo({ ...formTodo, priority: e.target.value });
          }}
        > 
          {themes.map((theme) => (
            <option
              className="top-4 flex gap-4"
              key={theme.color}
              value={theme.label}
            >
              {theme.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={clsx(
          "text-white mt-10 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center",
          `bg-${colorTheme} hover:bg-${colorTheme.replace(
            "-300",
            "-400"
          )} focus:ring-${colorTheme}`
        )}
        onClick={handleClick}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
