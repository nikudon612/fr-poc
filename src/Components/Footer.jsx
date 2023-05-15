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
                <div className='footer-sub'>Companies</div>
                <div className='footer-sub'>FAQ</div>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>CONTACT US</div>
                <div className='footer-sub'>Investment Inquiries</div>
                <div className='footer-sub'>Media Inquiries</div>
                <div className='footer-sub'>General Inquiries</div>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>CAREERS</div>
                <div className='footer-sub'>Open Portfolio Roles</div>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>LOGIN</div>
            <div className='footer-sub'>LP Login</div>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>LEGAL</div>
            <div className='footer-sub'>Privacy Policy</div>
            <div className='footer-sub'>Cookie Preferences</div>
            </div>
        </div>
        <img src={line} className='footer-line'/>
        <div className='footer-bottom'>
            <img src={frlogo} className='left-margin'/>
            <div className='footer-sub-text right-margin'>@2023 Forerunner Ventures. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer