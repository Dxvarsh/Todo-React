import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeSwitch";
import Home from "./components/Home";
import { TodoDataProvider } from "./contexts/TodoData";

const App = () => {
  const [TodoData, setTodoData] = useState([]); 
  const [theme, setTheme] = useState("light");
  const [colorTheme, setColorTheme] = useState("orange-500"); // default color theme is Orange
  const [userName, setUserName] = useState("User"); // default color theme is Orange

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);


  const getFormattedDateTime = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
  
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const removeTodoData = (todoId) => {
    setTodoData(() => TodoData.filter((todo) => todo.todoId !== todoId));
  };
  const toggelComplete = (todoId) => {
    const endDate = getFormattedDateTime();
    setTodoData((prevTodo) => {
      return TodoData.map((todo) =>
        todo.todoId === todoId ? { ...todo, endDate: endDate, completed: !todo.completed } : todo
      );
    });
  };
  const addTodo = (newTodoData) => {
    const addDate = getFormattedDateTime()
    setTodoData([...TodoData, { todoId: Date.now(), addDate: addDate, ...newTodoData }]);
  };
  const editTodo = (id, newTodo) => {
    setTodoData((prevTodos) =>(
      prevTodos.map((todo) =>
        todo.todoId === id
          ? { ...todo, todo: newTodo.todo } // Update the todo with the matching id
          : todo
      )
    ));
  };


  /** * * * * * * * * **
   **  LOCAL STORAGE  ** 
   ** * * * * * * * * **/

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("TodoData"))
    
    if (todos && todos.length > 0) {
      setTodoData(todos)
    }
    setUserName(JSON.parse(localStorage.getItem("userName")))
    setColorTheme(JSON.parse(localStorage.getItem("colorTheme")))
    setTheme(JSON.parse(localStorage.getItem("themeMode")))
  }, [])


  useEffect(() => {
    localStorage.setItem("TodoData", JSON.stringify(TodoData))
    localStorage.setItem("userName", JSON.stringify(userName))
    localStorage.setItem("colorTheme", JSON.stringify(colorTheme))
    localStorage.setItem("themeMode", JSON.stringify(theme))
  }, [TodoData, userName, colorTheme, theme])


  return (
    <TodoDataProvider
      value={{ TodoData, addTodo, removeTodoData, editTodo, toggelComplete, userName, setUserName, setUserName}}
    >
      <ThemeProvider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
        <Home />
      </ThemeProvider>
    </TodoDataProvider>
  );
};

export default App;
