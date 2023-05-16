import React from 'react'
import '../Styles/LoadingScreen.css'
import logo from '../Assets/Forerunner_Wordmark_White.png'

function LoadingScreen() {
  return (
    <div className='loadingscreen'>
        <img src={logo} className='loadingLogo'/>
    </div>
  )
}

export default LoadingScreen