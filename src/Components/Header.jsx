import React, { useState } from 'react'
import '../Styles/Header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Vector.png'
import line from '../Assets/Line.png'
import { Outlet, Link, NavLink } from "react-router-dom";


function Header() {
  const [activeLink, setActiveLink] = useState('');
  const handleClick = (link) => {
    setActiveLink(link);
  };
  
  function changeHeader() {
    gsap.fromTo(".header", {backgroundColor: "transparent"}, { backgroundColor: "#001633", ease: "power2.inOut", scrub: true});
  }
  function changeHeader2() {
    gsap.fromTo(".header", {backgroundColor: "#001633"}, { backgroundColor: "transparent", ease: "power2.inOut", scrub: true})
  }
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.header', { scrollTrigger: {
      trigger: ".hero",
      start: "bottom 150px",
      end: "bottom bottom",
      offset: 100,
      scrub: true,
    },
    onUpdate: changeHeader, onReverseComplete: changeHeader2})
  },[]);
  return (
    <div className='header'>
      <div className='header-left'>
          <div className='header-logo'>
            <NavLink to="/">
              <img src={frlogo} alt='logo' className='frlogo' href="/"/>
            </NavLink>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-links'>
            <NavLink to="/companies" id="link" >COMPANIES</NavLink>
            <NavLink to="/team" id="link" >TEAM</NavLink>
            <NavLink to="/perspectives"id="link" >PERSPECTIVES</NavLink>
            <NavLink to="/platforms" id="link" >PLATFORMS</NavLink>
          </div>
        </div>
        <img src={line} className='theLine' />
    </div>
  )
}

export default Header;