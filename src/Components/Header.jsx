import React from 'react'
import '../Styles/Header.css';
import logo from '../Assets/Vector.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Header() {
  function changeHeader() {
    gsap.fromTo(".header", {backgroundColor: "transparent"}, { backgroundColor: "#001633", ease: "power2.inOut"});
  }
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.header', { scrollTrigger: {
      trigger: ".panel1",
      start: "top top",
      end: "bottom bottom",
      markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      scrub: true,
    },
    onComplete: changeHeader})
  },[]);
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