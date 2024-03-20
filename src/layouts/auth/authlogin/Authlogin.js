import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authlogin } from "../../../services/operation/authApi"
function Authlogin() {

    const dispacth = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();

      const id = document.getElementById("id").value;
      const password = document.getElementById("password").value
      console.log(id,password);
      dispacth(authlogin(id,password,navigate));
    }


  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text"
          required
          name='id'
          id='id'
          placeholder='id'
        />

        <input type="password"
          required
          name='password'
          id='password' />

          <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Authlogin