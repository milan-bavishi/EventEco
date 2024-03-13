import React, { useState } from "react";
import { useSelector } from "react-redux";

function Checkindata() {
  const user = useSelector((state)=>state.profile.user);
  return (
    <>
    <h3>
    {user.role}
    </h3>
    </>
  )
}

export default Checkindata
