import React from 'react'
import '../Styles/Header.css';
import logo from '../Assets/Vector.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      scrub: true,
    },
    onComplete: changeHeader})
  },[]);

  // gsap.from('.header', { scrollTrigger: {
  //   trigger: ".hero",
  //   start: "top 15%",
  //   end: "bottom top",
  //   scrub: true,
  //   markers: {startColor: "green", endColor: "red", fontSize: "12px"}
  // }, 
  // onComplete: changeHeader2
  // })
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