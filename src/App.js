import React from 'react'
import Home from './layouts/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './layouts/auth/login/Login/Login'
import Signup from './layouts/auth/signup/Signup'
import EmailVerify from './layouts/auth/signup/EmailVerify'
import Dashboard from './layouts/Dashboard/Dashboard'
import Privet from './layouts/Dashboard/Privet'
import PrivateRoute from './component/PrivateRoute'
import Addperson from './layouts/Dashboard/Dashboard'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-email" element={<EmailVerify />} />
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        <Route path="/dashboard/addperson" element={<Addperson/>} />
        {/* <Route path="/admin/mytournaments" element={<Mytournaments />} />
        <Route path="/admin/mytournamnets/addtournaments" element={<Addtournaments />} />
        <Route path="/admin*" element={<>404 Page Not Found</>} /> */}
      </Route>
      )
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

    </Routes>
  )
}


export default App;
