import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { registerAuthorities,findallData } from "../../../.././services/event/registration"
import "./Addauthorities.css"

function Addauthorities() {

  const {email} = useSelector((state)=>state.profile.user);
  const [allData, setallData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    findallData(setallData, setLoading,email);
  }, []);
    return (
      <div className='authWrapper'>
        <div className='authCard'>
          <div className='authCardHead'>
            <h1>Generate</h1>
          </div>
          <div className='authCardForm'>
            <form action=""  className='authForm'>
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

