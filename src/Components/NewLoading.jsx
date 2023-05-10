import React from 'react'
import '../Styles/NewLoading.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Forerunner_Wordmark_White.png'



function NewLoading() {
    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => { 
        gsap.fromTo('.frlogo', { scrollTrigger: { 
            trigger: ".newloading",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }, 
        duration: 1, width: '100%', y: '-200%'
    }
    , { scrollTrigger: {
        trigger: ".newloading",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    }, duration: 1, width: '25%', y: '0%'}
    )
    },[]);
  return (
    <div className='newloading'>
        <div className='top'></div>
        {/* <div className='nav'>
        <div className='header'>
      <div className='header-left'>
          <div className='header-logo'>
            <img src={frlogo} alt='logo' className='frlogo'/>
          </div>
        </div>
        </div> */}
        {/* </div> */}
    </div>
  )
}

export default NewLoading