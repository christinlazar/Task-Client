import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Addtask from '../pages/Addtask'
function UserRoute() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-task' element={<Addtask/>}/>
    </Routes>
  )
}

export default UserRoute