import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn.jsx";
import { NavLink } from "react-router-dom";
import ThemeDropDown from "./ThemeDropDown.jsx";
import useTheme from "../contexts/ThemeSwitch.js";

const Navbar = () => {
  const { colorTheme } = useTheme();
  const [editUserName, setEditUserName] = useState(false)
  const [userName, setUserName] = useState("User's Todo")

  return (
    <>
      <nav className={`p-4 pt-6 mx-auto border-b border-${colorTheme} w-full`}>
        <div className="top-nav flex justify-between mb-4">
          <h1 className={`${`text-${colorTheme}`} flex gap-4 font-bold font-sans`}>
            <h1 className={`${editUserName ? "hidden" : "block"} md:text-3xl text-2xl`}>{userName ? `${userName}'s Todo` : "Enter your name to see your Todo"}</h1>
            <input
                type="text"
                className={`w-1/2 border outline-none bg-transparent rounded-lg ${
                  editUserName ? "block border-black/10" : "hidden border-transparent"
                }`}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                readOnly={!editUserName}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => setEditUserName(!editUserName)}
            >
                {editUserName ? "📁" : "✏️"}
            </button>
          </h1>
          <div className="top-right-nav flex gap-4">
            <div className="flex gap-2 items-center ">
              
            </div>
            {/* Theme btn code */}
            <ThemeBtn />
          </div>
        </div>
        <hr className="border-b border-neutral-300 dark:border-neutral-800 mb-4" />
        <div className="bottom-nav flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
                  isActive
                    ? `bg-${colorTheme} text-white border-${colorTheme}`
                    : `bg-transparent text-${colorTheme} border-${colorTheme}`
                }`
              }
            >
              All Todos
            </NavLink>
            <NavLink
              to="/completedTodo"
              className={({ isActive }) =>
                `py-1 px-3 rounded-md text-xs font-semibold border ${
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
