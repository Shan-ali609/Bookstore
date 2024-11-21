import React from 'react'
import Home from './components/home/Home'
import Courses from './Courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
function App() {
  return (
    <div>

     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/course' element={<Courses />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
    </Routes> 
  
    </div>
  )
}

export default App
