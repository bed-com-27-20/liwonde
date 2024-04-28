'use client'
import React, { useState, useEffect } from 'react';
import { 
  Note, 
  People, 
  LocationOn, 
  Info, 
  Facebook, 
  WhatsApp,
  Twitter, 
  Instagram, 
  LinkedIn 
} from '@material-ui/icons';
import './footer.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
    
    // Update the current year every time the year changes
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour, assuming the component might stay mounted for a long time

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to handle click event on the phone number link
  const handleCallClick = () => {
    const phoneNumber = "0888597087"; // Replace with the actual phone number
    window.location.href = "tel:" + phoneNumber;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li><a href="Appointment"><Note className="my-icon1"/>Book Appointment</a></li>
              <li><a href="/Team"><People className="my-icon1"/>Team of Developers</a></li>
              <li><a href="/Map"><LocationOn className="my-icon1"/> Location</a></li>
              <li><a href="/AboutUs"><Info className="my-icon1"/>About Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              {/* Add onClick event handler to initiate the phone call */}
              <li><a onClick={handleCallClick}>Call: 0888597087</a></li>
              {/* Add mailto: protocol to send email */}
              <li><a href="mailto:liwondeclinic@yahoo.com">Email: liwondeclinic@yahoo.com</a></li>
              <li><a>Physical Address</a></li>
              <li><a>Open Hours</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://web.facebook.com/liwondemedicalclinic"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
              <a href="https://wa.me/message/W7OYL7YA7NVEE1"><WhatsApp /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Map Of The Hospital</h4>
            <iframe
              title="Google Map"
              width="300"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row item-center">
          <div className="col-16 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white' }}>&copy; {currentYear} Liwonde Private Hospital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
