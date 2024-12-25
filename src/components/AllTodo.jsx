import React from 'react'
import AddTodoForm from './AddTodoForm'
import Card from './Card'

const AllTodo = () => {
  return (
    <div>
        {/* <Outlet /> */}
        <AddTodoForm />
        <Card />
                
    </div>
  )
}

export default AllTodo