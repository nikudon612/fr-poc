import React from 'react'
import '../Styles/Advantage.css'
import frlogo from '../Assets/Forerunner_Wordmark_White.png'
import asterix from '../Assets/Purp-asterix.png'
import line from '../Assets/Line.png'
import arrow from '../Assets/arrow.png'

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
                <img src={asterix} className='asterix'/>
            </div>
            <div className='advantage-bottom-half'>
            <img src={line} className='advantage-line '/>

                <div className='advantage-bottom-half-text'>
                    Forerunner is a <span className='bolded'>reasearch-focused, thesis-driven</span> venture capital firm that's 
                    <br />
                     <span className='bolded'>purpose-built</span> to better understand and serve a fast paced changing society.
                </div>
            </div>
        </div>
        <div className='advantage-bottom'>
            <div className='panel5-brandName' href="">Glossier</div>
            <img src={arrow} className='panel5-brandName panel5-arrow'/>
        </div>
    </div>
  )
}

export default Advantage