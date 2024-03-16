import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { registerUser,findallData } from '../../../../services/event/registration'
import "./Addperson.css"

function Addperson() {


  const {email} = useSelector((state)=>state.profile.user);
  const [allData, setallData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    findallData(setallData, setLoading,email);
  }, []);
  
  return (
    <div className='personWrapper'>
      <div className='personCard'>
        <div className='pCardHeading'>
          <h1>Enter details...</h1> 
        </div>
        <div className='pCardForm'>
          <div>
          <div className='pFormInput'>
          <label htmlFor="">Event Name</label>
              <select name="" id="">
                {
                  allData.length==0?(<><option value="NA"> No Event Found  </option> </>):(<>
                  
                    {
                      allData.map((val,index)=><option value={`${val.eventName}`}>{val.eventName}</option> )
                    }
                  
                  </>)
                }  //drop down data of event .
              </select>
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

