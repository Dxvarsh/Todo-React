import React from "react";
import AddTodoForm from "./AddTodoForm";
import Card from "./Card";
import useTodoData from "../contexts/TodoData";

const AllTodo = () => {
  const { TodoData } = useTodoData();
  
  return (
    <div>
      {/* <Outlet /> */}
      <AddTodoForm />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TodoData.map((todo, id) => (
          <Card key={id} propTodo={todo} />
        ))}
      </div>
    </div>
  );
};

export default AllTodo;
