import React from 'react'
import '../Styles/LoadingScreen.css'
import logo from '../Assets/Forerunner_Wordmark_White.png'
import { gsap } from 'gsap';


function LoadingScreen() {
    React.useEffect(() => {
        gsap.fromTo('.loadingLogo', {opacity: 0, y: 500, duration: 3}, {duration: 1, opacity: 2.5, y: 0, ease: 'back.inOut(1)', onComplete: () => {
            gsap.to(window, {duration: 1.5, scrollTo: {y: ".header", onComplete: () => {
              
            }}})
        }})
    }, []);
  return (
    <div className='loadingscreen'>
        <img src={logo} className='loadingLogo'/>
    </div>
  )
}

export default LoadingScreen