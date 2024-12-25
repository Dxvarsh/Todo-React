import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTodo from '../components/AllTodo'
import AddTodoForm from '../components/AddTodoForm'
import CompletedTodo from '../components/completedTodo'
import TodoTheme from '../components/TodoTheme'

const route = () => {
  return (
    <Routes>
        <Route path='/' element={<AllTodo/>}>
          <Route path='/AddTodoForm' element={<AddTodoForm/>}></Route>
          {/* <Route path="/Orange/song/:songId" element={<completedTodo />} />  For Using Outlet tag */}
        </Route>
        <Route path="/completedTodo" element={<CompletedTodo />}></Route>
        <Route path='/TodoTheme' element={<TodoTheme/>}></Route>
    </Routes>
  )
}

export default route