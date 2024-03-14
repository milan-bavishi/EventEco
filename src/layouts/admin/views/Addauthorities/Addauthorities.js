import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerAuthorities } from "../../../.././services/event/registration"
import "./Addauthorities.css"

function Addauthorities() {

  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.profile.user);
  const onSubmit = (e) => {
    e.preventDefault();
    const authId = document.getElementById("authId").value;
    const authLocation = document.getElementById("authLocation").value;
    const authPassword = document.getElementById("authPassword").value;
    const authDesignation = document.getElementById("authDesignation").value;
    console.log(authId,authLocation,authPassword,authDesignation);
    dispacth(registerAuthorities(authId,authLocation,authPassword,authDesignation,email, navigate));
    navigate('/dashboard');
  }

    return (
      <div className='authWrapper'>
        <div className='authCard'>
          <div className='authCardHead'>
            <h1>Generate</h1>
          </div>
          <div className='authCardForm'>
            <form action="" onSubmit={onSubmit} className='authForm'>
              {/* <div>
              <div className='pFormInput'>
                <label htmlFor="">Last Name</label>
                <input type="text" required />
              </div>
            </div> */}
              <div className='authFormfs'>
                <div className='authFormInput'>
                  <label htmlFor="">Id.</label>
                  <input type="text"
                    required
                    name='authId'
                    id='authId' />
                </div>
                <div className='authFormInput'>
                  <label htmlFor="">location</label>
                  <input type="text"
                    required
                    name='authLocation'
                    id='authLocation' />
                </div>
              </div>
              <div className='authFormss'>
                <div className='authFormInput'>
                  <label htmlFor="">Password</label>
                  <input type="text"
                    required
                    name='authPassword'
                    id='authPassword' />
                </div>
                <div className='authFormInput'>
                  <label htmlFor="">Designation</label>
                  <input type="text"
                    required
                    name='authDesignation'
                    id='authDesignation' />
                </div>
              </div>
              <div className='authFormts'>
                <div className='authFormBtn'>
                  <button type='submit'>Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default Addauthorities

