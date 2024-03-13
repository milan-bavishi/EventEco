import React from 'react'
import "./Addauthorities.css"

function Addauthorities() {
  return (
    <div className='authWrapper'>
      <div className='authCard'>
        <div className='authCardHead'>
          <h1>Generate</h1>
        </div>
        <div className='authCardForm'>
          <form action="" className='authForm'>
            {/* <div>
              <div className='pFormInput'>
                <label htmlFor="">Last Name</label>
                <input type="text" required />
              </div>
            </div> */}
            <div className='authFormfs'>
              <div className='authFormInput'>
                <label htmlFor="">Id.</label>
                <input type="text" />
              </div>
              <div className='authFormInput'>
                <label htmlFor="">location</label>
                <input type="text" />
              </div>
            </div>
            <div className='authFormss'>
              <div className='authFormInput'>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div className='authFormInput'>
                <label htmlFor="">Designation</label>
                <input type="text" />
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

