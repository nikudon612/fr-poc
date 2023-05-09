import React from 'react'
import '../Styles/Header.css';
import logo from '../Assets/Vector.png';

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
          <div className='header-logo'>
            <img src={logo} alt='logo' className='logo'/>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-links'>
            <a href='#'>Companies</a>
            <a href='#'>Team</a>
            <a href='#'>Persepectives</a>
            <a href='#'>Platforms</a>
          </div>
        </div>
        
    </div>
  )
}

export default Header;