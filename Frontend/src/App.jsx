// import React from 'react'
// import Home from './components/home/Home'
// import Courses from './Courses/Courses'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Signup from './components/Signup'
// import { Toaster } from 'react-hot-toast';
// import { useauth } from './components/contextapi/Userauth'
// function App() {
//   const [ authUser , setauthUser] = useauth();
//   return (
//     <div>

//      <Routes>
//       <Route path='/' element={<Home />}></Route>
//       <Route path='/course' element={ authUser ? <Courses /> : <Navigate to='/signup'/>  }></Route>
//       <Route path='/Signup' element={<Signup />}></Route>
//     </Routes> 
//     <Toaster />
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/contextapi/Userauth'; // Correct import for `useAuth`

function App() {
  const [authUser, setAuthUser] = useAuth(); // Correct destructuring for authUser

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/course' 
          element={authUser ? <Courses /> : <Navigate to='/signup' />} 
        />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster /> {/* Toast notifications */}
    </div>
  );
}

export default App;
