import React from 'react'
import './Footer.css'
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <div class="Footer">
            
                <div  className='Footer-content'>
                            <div className='Footer-content-links'>
                            <Link to='/'className='footer-link'> Home </Link>
                            <Link to='/aboutus' className='footer-link'> About us </Link>
                            <Link to='/counts' className='footer-link'> Counts</Link>
                            <Link to='/events' className='footer-link' > Events</Link>
                            <Link to='/team' className='footer-link' > Team </Link>
                            <Link to='/gallary' className='footer-link' > gallary</Link>
                            


                            </div>
                    <div className='footerline'> </div>
                <p> © 2024 Rotary International. All rights reserved. Privacy Policy Terms of Use</p>
                </div>
          
         </div>
    </div>
  )
}

export default Footer;
