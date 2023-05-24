import React from 'react'
import '../Styles/Header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Vector.png'
import line from '../Assets/Line.png'
import { Outlet, Link } from "react-router-dom";


function Header() {
  
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
            <Link to="/">
              <img src={frlogo} alt='logo' className='frlogo' href="/"/>
            </Link>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-links'>
            <Link to="/companies" id="link">COMPANIES</Link>
            <Link to="/team" id="link">TEAM</Link>
            <Link to="/perspectives"id="link">PERSPECTIVES</Link>
            <Link to="/platforms" id="link">PLATFORMS</Link>
          </div>
        </div>
        <img src={line} className='theLine' />
    </div>
  )
}

export default Header;