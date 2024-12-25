import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        theme: "light",
        toggleTheme: () => { },
        colorTheme: "orange-500",
        setColorTheme: () => { },
        // colorTheme: {
        //     orange: "orange-500",
        //     blue: "blue-500",
        //     green: "green-500",
        //     purple: "purple-500",
        //     pink: "pink-500",
        //     teal: "teal-500",
        //     yellow: "yellow-500",
        //     red: "red-500",
        //     gray: "gray-500",
        // }
    }
)

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}