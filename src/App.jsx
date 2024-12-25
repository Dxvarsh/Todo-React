import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeSwitch";
import Home from "./components/Home"

const App = () => {
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useState("light");
  const [colorTheme, setColorTheme] = useState("orange-500"); // default color theme is white

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
