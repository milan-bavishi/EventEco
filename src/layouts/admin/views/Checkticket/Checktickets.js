import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkticket } from '../../../../services/event/registration'

function Checktickets() {

  const { email } = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [codedata, setCodedata] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkticket(codedata));
    navigate('/dashboard/checktickets');
  }

  const handleChange = (e) => {
    setCodedata(e.target.value);
  }

  return (
    <>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="codedata">Enter Code:</label>
                    <input 
                      type="text"
                      id="codedata"
                      value={codedata}
                      onChange={handleChange}
                      required
                    />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Checktickets;
