import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setSignupData } from '../../../slices/auth'
import { sendOtp } from '../../../services/operation/authApi'
import { useNavigate } from 'react-router-dom'
import photo1 from "./images/photo1.jpg"
import photo2 from "./images/photo2.jpg"
import photo3 from "./images/photo3.jpg"
import photo4 from "./images/photo4.jpg"
import photo5 from "./images/photo5.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { firstName, lastName, email, password, confirmPassword } = formData
  const { loading } = useSelector((state) => state.auth)

  function handleOnChange(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    console.log(formData);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("Data Sub,itted");
    console.log(formData)
    if (password !== confirmPassword) { toast.error("Passwords do not match"); return; }
    const signupData = { ...formData };
    dispatch(setSignupData(signupData))                                    // Setting signup data to state To be used after otp verification
    dispatch(sendOtp(formData.email, navigate))                           // Send OTP to user for verification
    setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", })           // Reset
    // setAccountType('user')
  }

  return (
    <div className='signWrapper'>
      <div className='signSlider'>
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
      <div className='signRightSection'>
        {
          (
            <div className='signTop'>
              <div className='signDetails'>
                <div className='signStart'>
                  <h1>Let’s Start!</h1>
                </div>
                <div className='signCreate'>
                  <div className='signFirstSection'>
                    <h2>Create an account</h2>
                    <h4>Please enter your details.</h4>
                  </div>

                  <div className='signSecondSection'>
                    <form method='POST' onSubmit={handleOnSubmit} action="" className='signForm'>
                      <div className='signInputs'>
                        <div className='inputName'>
                          <input type="text"
                            required
                            placeholder='First Name'
                            className='inAtcom'
                            name='firstName'
                            value={firstName}
                            onChange={handleOnChange}
                          />
                          <input type="text"
                            required
                            placeholder='Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={handleOnChange}
                          />

                        </div>
                        <div className='inputOthers'>
                          <input type="email"
                            required
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={handleOnChange}
                          />
                          <input type="password"
                            required
                            placeholder='Password'
                            className='inAtcom'
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                          />
                          <input type="password"
                            required
                            placeholder='Conform Password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className='signBtn'>
                        <button type="submit">
                          Create account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='signAcc'>
                <p>Already have an account ?</p>
                <Link to='/login' className='link'>
                  Log in
                </Link>
              </div>

            </div>
          )
        }

      </div>
    </div>
  )
}

export default Signup