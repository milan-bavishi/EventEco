import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authcheckticket } from '../../../services/operation/authApi'

function Authtickets() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [codedata, setCodedata] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authcheckticket(codedata,navigate));
    navigate('/authchecktickets');
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

export default Authtickets;
