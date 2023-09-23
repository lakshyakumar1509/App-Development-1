import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
          <div className="footer-logo">
            <p>Helping Save Lives</p>
          </div>
          <div className="footer-links">
                <a href="/">Home</a>
                <a href="/donors">Donors</a>
                <a href="/recipients">Recipients</a>
                <a href="/contact">Contact Us</a>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: nim@gmail.com</p>
            <p>Phone: +91 928632115</p>
            
      </div>
    </footer>
  );
}

export default Footer;