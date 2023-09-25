import React from 'react';
import './footer.css';
import { LuFacebook ,LuTwitter ,LuInstagram } from 'react-icons/lu';

function Footer() {
  return (
      <div className="footer-contact">
        <h5 id='c'>Contact Us</h5>
        <div className='end'>
          <p>Email: nim@gmail.com</p>
          <p>Phone: +91 9500766155</p>
            <div className='e'>
          &copy; Heartify Organ Donation
          </div>
          <div className='social-content'>
          <a href="https://www.instagram.com/your-instagram-account">
          <LuInstagram  fontSize={30} color='white'/>
          </a>
          <a href="https://www.facebook.com/your-facebook-page">
          <LuFacebook fontSize={30} color='white'/>
          </a>
          <a href="https://twitter.com/your-twitter-account">
          <LuTwitter fontSize={30} color='white'/>
          </a>
          </div>
        </div>
      </div>
  );
}

export default Footer;