import React, { useState } from "react";
import useTheme from "../contexts/ThemeSwitch";

const themes = [
  { color: "orange-500", label: "Orange Theme" },
  { color: "blue-500", label: "Blue Theme" },
  { color: "red-500", label: "Red Theme" },
  { color: "yellow-500", label: "Yellow Theme" },
  { color: "teal-500", label: "Teal Theme" },
  { color: "sky-500", label: "Sky Theme" },
  { color: "indigo-500", label: "Indigo Theme" },
  { color: "fuchsia-500", label: "Fuchsia Theme" },
  { color: "rose-500", label: "Rose Theme" },
];

const ThemeDropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { colorTheme, setColorTheme } = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleThemeChange = (themeColor) => {
    setColorTheme(themeColor);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full hover:bg-${colorTheme} rounded-md px-3 py-1.5 border border-${colorTheme} hover:border-${colorTheme} text-${colorTheme} font-semibold md:text-sm text-xs ${isDropdownOpen ? `bg-${colorTheme} text-white` : "bg-transparent"}`}
      >
        Color Theme
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="z-10 absolute -left-14 top-11 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-neutral-900 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {themes.map((theme) => (
              <li
                key={theme.color}
                className={`flex gap-4 px-4 py-2 items-center hover:bg-slate-50 dark:hover:bg-neutral-800`}
              >
                <input
                  type="radio"
                  id={`theme-${theme.color}`}
                  name="theme"
                  className="hidden peer"
                  onChange={() => handleThemeChange(theme.color)}
                />
                <label
                  htmlFor={`theme-${theme.color}`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`h-4 w-4 border-2 border-neutral-900 dark:border-white bg-${theme.color} rounded-full`}
                  ></div>
                  <span>{theme.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeDropDown;
