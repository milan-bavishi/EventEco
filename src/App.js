import React from "react";
import { useSelector } from "react-redux"                     // Redux
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./component/PrivateRoute";

import Dashboard from "./layouts/admin/index"
import Home from "./layouts/Home/Home"
import Login from "./layouts/auth/login/Login/Login";
import Signup from "./layouts/auth/signup/Signup";
import EmailVerify from "./layouts/auth/signup/EmailVerify";
import Addauthorities from "./layouts/admin/views/Addauthorities/Addauthorities";

import Admin from "./layouts/admin/index"

import Addperson from "./layouts/admin/views/Addperson/Addperson"
import Authoritiesdata from "./layouts/admin/views/Authoritiesdata/Authoritiesdata"
import Checkindata from "./layouts/admin/views/Checkindata/Checkindata"
import Registerevent from "./layouts/admin/views/Registerevent/Registerevent"
import Resgistrationdata from "./layouts/admin/views/Resgistrationdata/Resgistrationdata"

function App() {

  // const { user } = useSelector((state) => state.profile)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-email" element={<EmailVerify />} />
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        <Route path="/dashboard/registerevent" element={<Registerevent />} />
        <Route path="/dashboard/addperson" element={<Addperson />} />
        <Route path="/dashboard/resgistrationdata" element={<Resgistrationdata />} />
        <Route path="/dashboard/checkindata" element={<Checkindata />} />
        <Route path="/dashboard/addauthorities" element={<Addauthorities />} />
        <Route path="/dashboard/authoritiesdata" element={<Authoritiesdata />} />
      </Route>
    </Routes>

    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/verify-email" element={ <EmailVerify />} />
    //   </Route>


    
    // <Route path="/login" element={<>This is Login</>} />
    // <Route path="*" element={<>404 PAge Not Found</>} />


    // </Routes>
  )
}


export default App;

