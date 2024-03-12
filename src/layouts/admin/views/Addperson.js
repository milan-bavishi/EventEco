import React from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../services/event/registration'
import "./stylesheets/Addperson.css"
function Addperson() {
  const dispacth = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log(name,email)
    dispacth(registerUser(name,email));
    window.location.replace("/dashboard");
  }
  return (
    <div>
      Addperson
      <form onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='Enter Your Name' id='name' />
        <input type="text" name='name' placeholder='Enter Your Name' id='email' />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Addperson

