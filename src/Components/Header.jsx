import React from 'react'
import '../Styles/Header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Vector.png'


function Header() {
  function changeHeader() {
    gsap.fromTo(".header", {backgroundColor: "transparent"}, { backgroundColor: "#001633", ease: "power2.inOut", scrub: true});
  }
  function changeHeader2() {
    gsap.fromTo(".header", {backgroundColor: "#001633"}, { backgroundColor: "transparent", ease: "power2.inOut", scrub: true})
  }
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // var tl = gsap.timeline({ scrollTrigger: { trigger: ".loading", start: 'top top', end: 'bottom bottom', markers: true } });
    // tl.fromTo(".frlogo", { width: '100%', y: -250 }, { width: '25%', y: 0 });

    
     
  //   gsap.from('.frlogo', { scrollTrigger: {
  //     trigger: ".loading",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     markers: {startColor: "green", endColor: "red", fontSize: "12px"}
  //   }
  //   , width: '100%', y: '-90%',
  // })

      
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
        
    </div>
  )
}

export default Header;