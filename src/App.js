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
                  <div></div>
                  </li>
                <li>
                  <a href="#">Why US</a>
                  <div></div>
                  </li>
                <li>
                  <a href="#">Our Team</a>
                  <div></div>
                  </li>
                <li>
                  <a href="#">Review</a>
                  <div></div>
                  </li>
                <li>
                  <a href="#">Contact Us</a>
                  <div></div>
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
              <h1></h1>
              <p></p>
            </div>
            <img src={Ellipse3} id='ellipse3' loading='lazy'/>
            <img src={Ellipse1} id='ellipse1' loading='lazy' />
            <img src={Ellipse2} id='ellipse2' loading='lazy'/>
            <img src={image2} id='image2'/>
            <img src={image3} id='image3'/>
            <img src={hero} id='hero'/>
            <img src={ yellowVector} id='yellowVector' />
            <img src="" alt="" />
          </section>
        </main>

       </div>
    </>
  );
}

export default App;
