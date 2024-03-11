import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import eventlogofooter from "./icon/eventEcofooter.png";
import eventeco from "./icon/eventeco.png";
import logo from "./icon/logo-nav-qr.png";
import hero from "./icon/hero-image.svg";
import image from "./icon/image.png"; 
import image2 from "./icon/image2.png";
import image3 from "./icon/image3.png";
import Ellipse1 from "./icon/Ellipse1.svg";
import Ellipse2 from "./icon/Ellipse2.svg";
import Ellipse3 from "./icon/Ellipse3.svg";
import Vector from "./icon/Vector.svg";
import yellowVector from "./icon/yellow-vector.svg";
import connectGraphic from "./icon/connect-graphic.svg";
import connectMail from "./icon/connect-mail.svg";
import github from "./icon/github.svg";
import instagram from "./icon/instagram.svg";
import linkedin from "./icon/linkedin.svg";
import location from "./icon/location.svg";
import mail from "./icon/mail.svg";
import mailSubscribe from "./icon/mail-subscribe.svg";
import number from "./icon/number.svg";
import reviewElemant from "./icon/review-elemant.svg";
import reviewEllipse1 from "./icon/review-ellipse-1.svg";
import reviewEllipse2 from "./icon/review-ellipse-2.svg";
import reviewEllipse3 from "./icon/review-ellipse-3.svg";
import reviewEllipse4 from "./icon/review-ellipse--4.svg";
import reviewQutos from "./icon/review-qutos.svg";
import subscribe from "./icon/subscribe.svg";
import teamSemicir from "./icon/team-semi-cir.svg";
import Vector1 from "./icon/Vector-1.svg";
import Vector2 from "./icon/Vector-2.svg";
import whyusEle1 from "./icon/whyus-ele-1.svg";
import whyusEle2 from "./icon/whyus-ele-2.svg";
import graphic from "./icon/graphic.svg";
import rectangle from "./icon/Rectangle.png";
import footerLocation from "./icon/footeLocation.png";
import footerNumber from "./icon/footerNumber.png";
import footerMail from "./icon/footerMail.png";
import Login from "../auth/login/Login/Login"
import Signup from "../auth/signup/Signup";
import photo1 from './icon/photo1.png'
import photo2 from './icon/photo2.png'
import photo3 from './icon/photo3.png'
import qutos from './icon/qutos.png'

function App() {
  return (
    <>
      <div className="homeWrapper" id="home">
        {/* Header */}
        <header>
          {/* NavBar */}
          <nav>
            {/* Logo */}
            <div className="event">
              <img src={eventeco} alt="" id="eventechoLogo" />
            </div>
            {/* Componen */}
            <div className="components">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#whyus">Why US</a>
                </li>
                <li>
                  <a href="#">Review</a>
                </li>
                <li>
                  <a href="#connectUs">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* Button */}
            <div className="button">
              <Link to="/login">
                <button>Create Event</button>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="desc">
              <div>
                <h1>Your Event, Safety Ours!</h1>
                <h2>Safe Event No Stress</h2>
              </div>
              <div>
                {/* <button>Create Our Event </button> */}
                <Link to="/login" className="link">
                  <button>Create Our Event </button>
                </Link>
              </div>
            </div>
            <div className="content">
              <div>
                <h1>Everything An Event Needs</h1>
                <p>
                  Watch your visions of the perfect event come to life with
                  EvenTor. From meticulous planning to foolproof execution – we
                  will ensure your event gets everything it needs with top
                  priority.
                </p>
              </div>
            </div>
            <img src={Ellipse3} id="ellipse3" loading="lazy" />
            <img src={Ellipse1} id="ellipse1" loading="lazy" />
            <img src={Ellipse2} id="ellipse2" loading="lazy" />
            <img src={image} id="image" />
            <img src={image2} id="image2" />
            <img src={image3} id="image3" />
            <img src={hero} id="hero" />
            <img src={yellowVector} id="yellowVector" />
            <img src={Vector} id="vector" />
          </section>

          {/* Why us */}
          <section className="whyUs" id="whyus">
            <div className="dots">
              <img src={whyusEle1} id="dot1" />
              <h1>Why Us</h1>
              <img src={whyusEle2} id="dot2" />
            </div>
            <div className="cards">
              <img src={Vector1} id="vector1" />
              <img src={Vector2} id="vector2" />

              <div className="cardMain">
                <div className="first">
                  <div className="card">Reliable Support</div>
                  <div className="card">Scalability</div>
                </div>

                <div className="second">
                  <div className="card">Innovative Technology</div>
                  <div className="card">Ease to Integration</div>
                  <div className="card">Continuous Innovation</div>
                </div>

                <div className="third">
                  <div className="card">Expert Team</div>
                  <div className="card">Key Features</div>
                </div>
              </div>
            </div>
          </section>

          {/* Review */}

          <div className="review" id="review">
          <img src={reviewEllipse1} id="review1" />
          <img src={reviewEllipse1} id="review2" />
          <img src={reviewEllipse3} id="review3" />
          <img src={reviewEllipse4} id="review4" />
            <h1>Hear From Our Happy Clients</h1>
          </div>

          {/* Slider */}

          <section className="homeSlider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              pagination={{ dynamicBullets: true }}
              className="swipe"
            >
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo1} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo2} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo3} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo1} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo2} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo1} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo2} alt="" />
                      
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo3} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sliderMain'>
                  <div>
                    <img src={qutos} alt="" />
                  </div>
                  <div className='sliContent'>
                    <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
                  </div>
                  <div className='sliderAbout'>
                    <div>
                      <img src={photo1} alt="" />
                    </div>
                    <div className='person'>
                      <p>Jenny Wilson</p>
                      <span>Trust Administrator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          {/* Connect US */}

          <section className="connectUs" id="connectUs">
            <div className="title">
              <h1>Connect Us</h1>
              <h4>We are here for you! How can we help?</h4>
            </div>
            <div className="details">
              <div className="location">
                <div>
                  <img src={graphic} alt="" />
                </div>
                <div className="loc">
                  <div className="flex">
                    <img src={location} alt="" />
                    <p>Sahjanad Hostel</p>
                  </div>
                  <div className="flex">
                    <img src={number} alt="" />
                    <p>+91 99999xxxxx</p>
                  </div>
                  <div className="flex">
                    <img src={connectMail} alt="" />
                    <p>info@eventeco.online</p>
                  </div>
                </div>
              </div>
              <div className="form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Go ahead, We are listening..."
                ></textarea>
                <button>submit</button>
              </div>
            </div>
          </section>

          {/* Subscribe */}

          <section className="subscribe">
            <img src={subscribe} id="subImg" />
            <div className="content">
              <h1>Subscribe For More Info</h1>
              <div className="subInput">
                <div className="subEmail">
                  <img src={mailSubscribe} id="mailSub" />
                  <input
                    type="text"
                    id="subInput"
                    placeholder="Your email here"
                  />
                </div>
                <div className="subBtn">
                  <button>Subsribe Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}

          <section className="footer">
            <img src={rectangle} id="footImg" alt="rectangle"/>
            <div className="footContent">
              <div className="getStarted">
                <h1>Ready to get started?</h1>
                <div>
                <Link to="/login" className="link">
                  <button>Create Our Event </button>
                </Link>
                </div>
              </div>
              <div className="footSec">
                <div className="leftSec">
                  <img src={eventlogofooter} id="eventFooter" height={75} />
                </div>
                <div className="rightSec">
                  <div className="footNav">
                    <p>
                      <a href="#home">Home</a>
                    </p>
                    <p>
                      <a href="#whyus">Why Us</a>
                    </p>
                    <p>
                      <a href="">Review</a>
                    </p>
                    <p>
                      <a href="#connectUs">Contact Us </a>
                    </p>
                  </div>
                  <div className="footLoc">
                    <div className="locFlex">
                      <img src={footerLocation} alt="" />
                      <p>Sahjanad Hostel</p>
                    </div>
                    <div className="locFlex">
                      <img src={footerNumber} alt="" />
                      <p>+91987654321</p>
                    </div>
                    <div className="locFlex">
                      <img src={footerMail} alt="" />
                      <p>info@eventeco.online</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights">
                <h1>©2024 EventEco. All Rights Reserved.</h1>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
