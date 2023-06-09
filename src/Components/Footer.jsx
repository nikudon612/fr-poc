import React from 'react'
import '../Styles/Footer.css'
import frlogo from '../Assets/Vector.png'
import line from '../Assets/Line.png'
import carrot from '../Assets/carrot.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-upper'>
            <div className='footer-upper-sub'>
                <a className='footer-newsletter left-margin' href="#">Subscribe to our Newsletter</a>
                <div className='footer-carrot'>
                    <img  src={carrot} />
                    <img  src={carrot} />
                </div>
                
            </div>
            <div className='footer-sub under-news left-margin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className='footer-top'>
            <div className='footer-section'>
                <div className='footer-title'>GET TO KNOW US</div>
                <a className='footer-sub'>Our Team</a>
                <a className='footer-sub'>Companies</a>
                <a className='footer-sub'>FAQ</a>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>CONTACT US</div>
                <a className='footer-sub'>Investment Inquiries</a>
                <a className='footer-sub'>Media Inquiries</a>
                <a className='footer-sub'>General Inquiries</a>
            </div>
            <div className='footer-section'>
                <div className='footer-title'>CAREERS</div>
                <a className='footer-sub'>Open Portfolio Roles</a>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>LOGIN</div>
            <a className='footer-sub'>LP Login</a>
            </div>
            <div className='footer-section'>
            <div className='footer-title'>LEGAL</div>
            <a className='footer-sub'>Privacy Policy</a>
            <a className='footer-sub'>Cookie Preferences</a>
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