import React from 'react'
import '../Styles/Footer.css'
import frlogo from '../Assets/Vector.png'
import line from '../Assets/Line.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-section'>
                <div className='footer-title'>GET TO KNOW US</div>
                <div className='footer-sub'>Our Team</div>
                <div>Companies</div>
                <div>FAQ</div>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>Contact US</div>
                <div>Investment Inquiries</div>
                <div>Media Inquiries</div>
                <div>General Inquiries</div>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>Careers</div>
                <div>Open Portfolio Roles</div>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>Login</div>
            <div>LP Login</div>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>Legal</div>
            <div>Privacy Policy</div>
            <div>Cookie Preferences</div>
            </div>
        </div>
        <div className='footer-bottom'>
            {/* <img src={line}/> */}
            <img src={frlogo}/>
            <div className='footer-sub-text'>@2023 Forerunner Ventures. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer