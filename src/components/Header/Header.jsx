import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/ignite.png'
import './header.css';

const Header = () => {
  return (
    <>    
    <nav className='nav'>
      <img className="logo" src={img1} alt="" />
      <ul>
        <li><Link to='/activities' className='nav-tag'>Activities</Link></li>
        <li><Link to='/teams' className='nav-tag'>Teams</Link></li>
        <li><Link to='/news' className='nav-tag'>News</Link></li>
        <li><Link to='/contact' className='nav-tag'>Contact</Link></li>
      </ul>
      </nav>
    </>
  );
};

export default Header;