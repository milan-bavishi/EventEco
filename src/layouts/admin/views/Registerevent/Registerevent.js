import React from 'react'
import { useDispatch } from 'react-redux';
import "./Registerevent.css"


function Registerevent() {










  return (
    <div className='registerWrapper'>
      <div className='registerCard'>
        <div className='regCardHeading'>
          <h1>Enter your event details...</h1>
        </div>
        <div>
          <form action="" className='regCardForm'>
            <div className='regFormfs'>
              <div className='regFormInput'>
                <label htmlFor="" className='firstres'>Company / Organizer name  </label>
                <input type="text"
                  required
                  name='companyName'
                  id='organizerName'
                />
              </div>
              <div className='regFormInput'>
                <label htmlFor="">Event name</label>
                <input type="text"
                  required
                  name='eventName'
                  id='eventname' />
              </div>
            </div>
            <div className='regFormss'>
              <div className='regFormInput'>
                <label htmlFor="">Company / Organizer Email</label>
                <input type="text"
                  required
                  id='organizerEmail' />
              </div>
            </div>
            <div className='regFormts'>
              <div className='regFormtsfs'>
                <div className='regFormInput'>
                  <label htmlFor="">Date</label>
                  <input type='date'
                    required
                    id='date' />
                </div>
                <div className='regFormInput'>
                  <label htmlFor="">Time</label>
                  <input type="time"
                    required
                    id='time' />
                </div>
              </div>
              <div className='regFormtsss'>
                <div className='regFormInput'>
                  <label htmlFor="">Categories</label>
                  <select placeholder='cfce' required id='categories'>
                    <option value="" disabled selected hidden>Select Categories</option>
                    <option value="Conference">Conference</option>
                    <option value="Music Event">Music Event</option>
                    <option value=" Sports Event"> Sports Event</option>
                    <option value="Exhibition/Trade Show">Exhibition/Trade Show</option>
                    <option value="Networking Event">Networking Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Cultural Event">Cultural Event</option>
                    <option value="Charity/Fundraising Event">Charity/Fundraising Event</option>
                    <option value="Educational Event">Educational Event</option>
                    <option value="Trade Conference/Expo">Trade Conference/Expo</option>
                    <option value="Tech Event">Tech Event</option>
                    <option value="Fashion">Fashion Show</option>
                    <option value="Food and Beverage Event"> Food and Beverage Event</option>
                    <option value="Health and Wellness Event">Health and Wellness Event</option>
                    <option value="Film/Entertainment Event">Film/Entertainment Event</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Virtual/Hybrid Event">Virtual/Hybrid Event</option>
                    <option value="Awards Ceremony">Awards Ceremony</option>
                    <option value="Holiday Event">Holiday Event</option>
                    <option value="Government/Political Event">Government/Political Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='regFormFs'>
              <div className='regFormInput'>
                <label htmlFor="">Venue</label>
                <textarea name="" id="venue" cols="30" rows="5"></textarea>
              </div>
              <div className='regFormInput'>
                <label htmlFor="">Description</label>
                <textarea name="" id="description" cols="30" rows="5"></textarea>
              </div>
            </div>
            <div className='regFormSubmit'>
              <button type="submit" className='regFormBtn'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registerevent
