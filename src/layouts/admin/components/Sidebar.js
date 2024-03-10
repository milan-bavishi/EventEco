import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseBtn from './CloseBtn';
import "./Sidebar.css"
import logo from "../../../Assets/Images/logo (1).png"
function Sidebar({ toggleHandler }) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkItems = [
    { text: 'Home', path:'/dashboard' },
    { text: 'Register Event', path: '/dashboard/registerevent' },
    { text: 'Add Person', path: '/dashboard/addperson' },
    { text: 'ResgistrationData', path: '/dashboard/resgistrationdata' },
    { text: 'Checkindata', path: '/dashboard/checkindata' },
    { text: 'Add Authorities', path: '/dashboard/addauthorities' },

    { text: 'Authoritiesdata', path: '/dashboard/Authoritiesdata' }
  ];
  const handleLinkItemClick = (index) => {
    setSelectedIndex(index);
  };



  return (
    <div className="container">
      <div className='logoContainer'>
        <div >
          <img src={logo} />
        </div>
        <button onClick={() => toggleHandler()} className='toggle-btn'>
          <CloseBtn />
        </button>
      </div>
      <hr className='hrline' />
      <ul className="link-items">
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`link-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleLinkItemClick(index)}
          >
            <NavLink to={item.path} className="link">

              <span >
                {item.text}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;