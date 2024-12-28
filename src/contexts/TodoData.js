import { createContext, useContext } from "react";

export const TodoDataContext = createContext(
    {
        userName: "User",
        setUserName: () => { },
        TodoData: [
            {
                todoId: 3,
                todo: "Complete DSA",
                completed: false,
                priority: "low",
                addDate: "",
                endDate: "",
            }
        ],
        addTodo: (todo) => { },
        removeTodoData: (todoId) => { },
        toggelComplete: (todoId) => { },
        editTodo: () => { },
    }
)

export const TodoDataProvider = TodoDataContext.Provider

export default function useTodoData() {
    return useContext(TodoDataContext)
}