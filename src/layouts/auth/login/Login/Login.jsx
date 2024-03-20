import React, { useState } from 'react'
import './login.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../../services/operation/authApi'
import photo1 from "./images/photo1.jpg"
import photo2 from "./images/photo2.jpg"
import photo3 from "./images/photo3.jpg"
import photo4 from "./images/photo4.jpg"
import photo5 from "./images/photo5.jpg"


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const { email, password } = formData


  function handleOnChange(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    console.log(formData)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className='loginWrapper'>
      <div className='slider'>
        {/* <img src={photo1} /> */}
        <Swiper navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='logSwiper'>
          <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className='logDetails'>
        <div className='logDet'>
          <div className="welcome">
            <h1>Welcome Back!</h1>
          </div>
          <div className='loginDetails'>
            <div className='logHeading'>
              <h2>Login</h2>
              <p>Please enter your details.</p>
            </div>
            <div className='formSection'>
              <form onSubmit={handleOnSubmit} className='logForm'>
                <div className='formInput'>
                <input type="email"
                  required
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handleOnChange}
                />
                <input type="password"
                  required
                  placeholder='Enter Your Password Here'
                  name='password'
                  value={password}
                  onChange={handleOnChange}
                />
                </div>
                <div className='logBtn'>
                  <button type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='account'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='link'>
            SignUp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login  