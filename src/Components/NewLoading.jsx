import React from 'react'
import '../Styles/NewLoading.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import frlogo from '../Assets/Forerunner_Wordmark_White.png'
import glossier from '../Assets/glossier.png'



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
    }, duration: 1, width: '45%', y: '0%'}
    )
    },[]);
  return (
    <div className='newloading'>
        <div className='something'>
            <img src={glossier} alt="just mangos..." className='something'/> 
        </div>
    </div>
  )
}

export default NewLoading