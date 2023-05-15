import React from 'react'
import '../Styles/Header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Vector.png'
import line from '../Assets/Line.png'


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
      trigger: ".panel1",
      start: "top 15%",
      end: "bottom bottom",
      scrub: true,
    },
    onComplete: changeHeader})
  },[]);
  return (
    <div className='header'>
      <div className='header-left'>
          <div className='header-logo'>
            <img src={frlogo} alt='logo' className='frlogo'/>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-links'>
            <a href='#' id="link">Companies</a>
            <a href='#' id="link">Team</a>
            <a href='#'id="link">Persepectives</a>
            <a href='#' id="link">Platforms</a>
          </div>
        </div>
        <img src={line} className='theLine' />
    </div>
  )
}

export default Header;