import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn.jsx";
import { NavLink } from "react-router-dom";
import ThemeDropDown from "./ThemeDropDown.jsx";
import useTheme from "../contexts/ThemeSwitch.js";
import useTodoData from "../contexts/TodoData.js";

const Navbar = () => {
  const { colorTheme } = useTheme();
  const { userName, setUserName } = useTodoData();
  const [editUserName, setEditUserName] = useState(false);

  return (
    <>
      <nav className={`p-4 pt-6 mx-auto border-b border-${colorTheme} w-full`}>
        <div className="top-nav flex justify-between mb-4">
          <h1
            className={`${`text-${colorTheme}`} flex gap-4 font-bold font-sans items-center`}
          >
            <h1
              className={`${
                editUserName ? "hidden" : "block"
              } md:text-3xl text-2xl`}
            >
              {userName
                ? `${userName}'s Todo`
                : "Enter your name to see your Todo"}
            </h1>
            <input
              type="text"
              className={`w-1/2 px-2 py-1 border outline-none bg-transparent rounded-lg ${
                editUserName
                  ? "block border-black/10"
                  : "hidden border-transparent"
              }`}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              readOnly={!editUserName}
            />
            {/* Edit, Save Button */}
            <button
              className="inline-flex w-7 h-7 rounded-lg text-sm border border-black/10 dark:border-white/90 justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-800 shrink-0 disabled:opacity-50"
              onClick={() => setEditUserName(!editUserName)}
            >
              {editUserName ? "📁" : "✏️"}
            </button>
          </h1>
          <div className="top-right-nav flex gap-4 items-center justify-center">
            <div
              className={`h-8 w-8 mt-0.5 border-2 border-neutral-900 shadow-md dark:border-white bg-${colorTheme} rounded-full`}
            ></div>
            {/* Theme btn code */}
            <ThemeBtn />
          </div>
        </div>
        <hr className="border-b border-neutral-300 dark:border-neutral-800 mb-4" />
        <div className="bottom-nav flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <NavLink
              to="/Todo-React"
              end
              className={({ isActive }) =>
                `py-1 px-3 rounded-md md:text-sm text-xs font-semibold border ${
                  isActive
                    ? `bg-${colorTheme} text-white border-${colorTheme}`
                    : `bg-transparent text-${colorTheme} border-${colorTheme}`
                }`
              }
            >
              All Todos
            </NavLink>
            <NavLink
              to="/Todo-React/completedTodo"
              className={({ isActive }) =>
                `py-1 px-3 rounded-md md:text-sm text-xs font-semibold border ${
                  isActive
                    ? `bg-${colorTheme} text-white border-${colorTheme}`
                    : `bg-transparent text-${colorTheme} border-${colorTheme}`
                }`
              }
            >
              Completed
            </NavLink>
            {/* Theme drop down */}
            <ThemeDropDown />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
