import React from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../services/event/registration'


function Addperson() {
  const dispacth = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    console.log(name)
    dispacth(registerUser(name));
  }
  return (
    <div>
      Addperson
      <form onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='Enter Your Name' id='name' />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Addperson

