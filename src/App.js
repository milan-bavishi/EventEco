import './App.css';
import eventeco from './icon/eventeco.png'
import logo from './icon/logo-nav-qr.png';
import hero from './icon/hero-image.svg';
import image from './icon/image.png';
import image2 from './icon/image2.png';
import image3 from './icon/image3.png';
import Ellipse1 from './icon/Ellipse1.svg';
import Ellipse2 from './icon/Ellipse2.svg';
import Ellipse3 from './icon/Ellipse3.svg';
import Vector from './icon/Vector.svg';
import yellowVector from './icon/yellow-vector.svg';
import connectGraphic from './icon/connect-graphic.svg';
import connectMail from './icon/connect-mail.svg';
import github from './icon/github.svg';
import instagram from './icon/instagram.svg';
import linkedin from './icon/linkedin.svg';
import location from './icon/location.svg';
import mail from './icon/mail.svg';
import mailSubscribe from './icon/mail-subscribe.svg';
import number from './icon/number.svg';
import reviewElemant from './icon/review-elemant.svg';
import reviewEllipse1 from './icon/review-ellipse-1.svg';
import reviewEllipse2 from './icon/review-ellipse-2.svg';
import reviewEllipse3 from './icon/review-ellipse-3.svg';
import reviewEllipse4 from './icon/review-ellipse--4.svg';
import reviewQutos from './icon/review-qutos.svg';
import subscribe from './icon/subscribe.svg';
import teamSemicir from './icon/team-semi-cir.svg';
import Vector1 from './icon/Vector-1.svg';
import Vector2 from './icon/Vector-2.svg';
import whyusEle1 from './icon/whyus-ele-1.svg';
import whyusEle2 from './icon/whyus-ele-2.svg';

function App() {
  return (
    <>
    <div className="wrapper">
        {/* Header */}
        <header>
          {/* NavBar */}
          <nav>
            {/* Logo */}
            <div className="event">
              <img src={eventeco} alt="" id="eventechoLogo"/>
            </div>
            {/* Componen */}
            <div className="components">
              <ul>
                <li>
                  <a href="#">Home</a>
                  </li>
                <li>
                  <a href="#">Why US</a>
                  </li>
                <li>
                  <a href="#">Our Team</a>
                  </li>
                <li>
                  <a href="#">Review</a>
                  </li>
                <li>
                  <a href="#">Contact Us</a>
                  </li>
              </ul>
            </div>
            {/* Button */}
            <div className="button">
              <button>Create Event</button>
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
                <button>Create Our Event </button>
              </div>
            </div>
            
            <div className="content">
              <div>
              <h1>Everything An Event Needs</h1>
              <p>
                Watch your visions of the perfect event come to life with
                EvenTor. From meticulous planning to foolproof execution –
                we will ensure your event gets everything it needs with top priority.
              </p>
              </div>
            </div>
            <img src={Ellipse3} id='ellipse3' loading='lazy'/>
            <img src={Ellipse1} id='ellipse1' loading='lazy' />
            <img src={Ellipse2} id='ellipse2' loading='lazy'/>
            <img src={image} id='image' />
            <img src={image2} id='image2'/>
            <img src={image3} id='image3'/>
            <img src={hero} id='hero'/> 
            <img src={ yellowVector} id='yellowVector' />
            <img src={Vector} id='vector' />
          </section>


          {/* Why us */}
          <section className='whyUs'>
              <div className='dots'>
                <img src="" alt="" />
                <h1>Why Us</h1>
                <img src="" alt="" />
              </div>
              <div className='cards'>
                <img src={Vector1}  id='vector1'/>
                <img src={Vector2}  id='vector2'/>
                {/* <div className="card1">
                  Innovative Technology 
                </div>
                <div className="card2">
                Reliable Support
                </div>
                <div className="card3">
                Ease to Integration

                </div>
                <div className="card4">
                Expert Team
                </div>
                <div className="card5">
                Scalability
                </div>
                <div className="card6">
                Continuous Innovation
                </div>
                <div className="card7">
                Key Features
                </div> */}
              </div>
          </section>

        </main>
       </div>
    </>
  );
}

export default App;
