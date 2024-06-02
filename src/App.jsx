//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User"
import CreateUser from "./CreateUser"
import Update from "./Update"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<User/>}>Users</Route>
            <Route path='/create' element={<CreateUser/>}>Create User</Route>
            <Route path='/update/:id' element={<Update/>}>Update User</Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
