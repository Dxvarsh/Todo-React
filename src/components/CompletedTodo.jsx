import React from "react";
import useTodoData from "../contexts/TodoData";
import Card from "./Card";

const CompletedTodo = () => {
  const { TodoData } = useTodoData();
  return (
    <div className="mt-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {TodoData.filter((todo) => todo.completed).map((todo) => (
        <Card key={todo.todoId} propTodo={todo} />
      ))}
    </div>
  );
};

export default CompletedTodo;
