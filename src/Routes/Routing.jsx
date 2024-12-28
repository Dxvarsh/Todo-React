import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTodo from '../components/AllTodo'
import CompletedTodo from '../components/completedTodo'

const route = () => {
  return (
    <Routes>
        <Route path='/Todo-React' element={<AllTodo/>} />
          {/* <Route path='/Todo-React/AddTodoForm' element={<AddTodoForm/>}></Route> */}
          {/* <Route path="/Orange/song/:songId" element={<completedTodo />} />  For Using Outlet tag */}
        
        <Route path="/Todo-React/completedTodo" element={<CompletedTodo />} />
    </Routes>
  )
}

export default route