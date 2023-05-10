import React from 'react'
import '../Styles/Loading.css'
import glossier from '../Assets/glossier.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import logo from '../Assets/Forerunner_Wordmark_White.png'

function Loading() {
    gsap.registerPlugin(ScrollTrigger);
    function logoChange() {
        gsap.to('.fr-logo', {duration: 1, width: '20%' });

    }
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.fr-logo', { scrollTrigger: {
        trigger: ".loading",
        start: "top top",
        end: "bottom center",
        scrub: true, 
        markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }, 
        // onComplete: logoChange
        duration: 1, width: '20%'
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