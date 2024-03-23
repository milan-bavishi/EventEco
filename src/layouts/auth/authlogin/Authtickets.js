import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authcheckticket } from '../../../services/operation/authApi'
import './Authtickets.css'

function Authtickets() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [codedata, setCodedata] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authcheckticket(codedata, navigate));
    navigate('/authchecktickets');
  }

  const handleChange = (e) => {
    setCodedata(e.target.value);
  }

  return (
    <>
      <div className="authCheckWrapper">
        <div className="authCheckCard">
          <form onSubmit={onSubmit} className="authCheckForm">
            <div className="authCheckHeading">
              <h1>Enter Ticket ID :-</h1>
            </div>
            <div className="authCheckFS">
              <input
                type="text"
                id="codedata"
                value={codedata}
                onChange={handleChange}
                placeholder="Ticket ID"
                required
              />
            </div>
            <div className="authCheckSS">
              <button type="submit" className="authCheckBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Authtickets;
