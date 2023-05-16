import React from 'react'
import '../Styles/Advantage.css'
import frlogo from '../Assets/Forerunner_Wordmark_White.png'

function Advantage() {
  return (
    <div className='advantage'>
        <div className='advantage-top'>
            <div className='advantage-top-half'>
                <div className='advantage-text'>
                    <img src={frlogo} className='advantage-logo'/>
                    <div className='advantage-text-sub'>
                        Advantage
                    </div>
                </div>
                <img />
            </div>
            <div className='advantage-bottom-half'>
                <div className='advantage-bottom-half-text'>
                    Forerunner is a <span className='bolded'>reasearch-focused, thesis-driven</span> venture capital firm that's 
                    <br />
                     <span className='bolded'>purpose-built</span> to better understand and serve a fast paced changing society.
                </div>
            </div>
        </div>
        <div className='advantage-bottom'>
            <img />
        </div>
    </div>
  )
}

export default Advantage