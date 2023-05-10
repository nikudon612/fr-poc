import React from 'react'
import '../Styles/Loading.css'
import glossier from '../Assets/glossier.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Forerunner_Wordmark_White.png'
import { Power2 } from 'gsap/gsap-core';

function Loading() {
    gsap.registerPlugin(ScrollTrigger);
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.logo', { scrollTrigger: {
        trigger: ".loading",
        start: "top top",
        end: "bottom top",
        scrub: 1, 
        markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }, 
        duration: 1, width: '100%', y: '-90%', ease: Power2.easeInOut, 
        // onComplete: function() {
        //     gsap.fromTo('.fr-logo', {position: "absolute"}, {position: "fixed", top: "50%", left: "50%", x: "-50%", y: "-50%"})
        // }
    });
    },[]);
  return (
    <div className='loading'>
        <img src={glossier} alt="just mangos..." className='glossier'/>
        {/* <img src={frlogo} alt="just mangos..." className='fr-logo'/> */}
    </div>
  )
}

export default Loading