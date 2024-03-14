import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { registerUser,findallData } from '../../../../services/event/registration'
import "./Addperson.css"

function Addperson() {



  // const [allData, setallData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   findallData(setallData, setLoading);
  // }, []);
  
  return (
    <div className='personWrapper'>
      <div className='personCard'>
        <div className='pCardHeading'>
          <h1>Enter details...</h1>
        </div>
        <div className='pCardForm'>
          <div>
          <div className='pFormInput'>
              <label htmlFor=""></label>
              <input type="text" required/>
            </div>
          </div>
          <div className='pFormfs'>
            <div className='pFormInput'>
              <label htmlFor="">First Name</label>
              <input type="text" required />
            </div>
            <div className='pFormInput'>
              <label htmlFor="">Last Name</label>
              <input type="text" required />
            </div>
          </div>
          <div className='pFormss'>
            <div className='pFormInput'>
              <label htmlFor="">Phone Number</label>
              <input type="tel" minLength={10} maxLength={10} required />
            </div>
            <div className='pFormInputRadio'>
              <label htmlFor="">Gender</label>
              <div className='pFormRadio'>
                <input type="radio" id='male' name='pFormradio' />
                <label htmlFor="male">Male</label>
                <input type="radio" id='female' name='pFormradio' />
                <label htmlFor="female">Female</label>
                <input type="radio" id='others' name='pFormradio' />
                <label htmlFor="others">Other</label>
              </div>
            </div>
          </div>
          <div className='pFormts'>
            <div className='pFormInput'>
              <label htmlFor="">Email</label>
              <input type="text" required />
            </div>
            <div className='pFormInput'>
              <label htmlFor="">Designation</label>
              <input type="text" required />
            </div>
          </div>
          <div className='pFormFs'>
            <div className='pFormBtn'>
              <button type='submit'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addperson

