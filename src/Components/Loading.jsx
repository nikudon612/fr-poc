import React from 'react'
import '../Styles/Loading.css'
import glossier from '../Assets/glossier.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import logo from '../Assets/Forerunner_Wordmark_White.png'
import { Power2 } from 'gsap/gsap-core';

function Loading() {
    gsap.registerPlugin(ScrollTrigger);
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.fr-logo', { scrollTrigger: {
        trigger: ".loading",
        start: "top top",
        end: "bottom center",
        scrub: true, 
        markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }, 
        duration: 3, width: '25%', y: 300, ease: Power2.easeInOut
    });
    },[]);
  return (
    <div className='loading'>
        <img src={glossier} alt="just mangos..." className='glossier'/>
        <img src={logo} alt="just mangos..." className='fr-logo'/>
    </div>
  )
}

export default Loading