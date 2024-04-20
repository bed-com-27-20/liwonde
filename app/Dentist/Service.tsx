import React from 'react';
import './Service.css';
import logo from "../images/icon.png"
import Image from 'next/image';
import Link from 'next/link';
// import Btz from '../Button/page'
import Header from '@/componets/navbar';
import Footer from '@/componets/footer'
import Button from '@/componets/Button'

function Service() {
  return (
    <>
    <Header/>
     <div className="zigege">
      <div>
      <img 
        src="https://i.pinimg.com/564x/0a/9b/05/0a9b055d7582f2104d245e5e21a7d920.jpg" 
        alt="Hospital" 
        className="hospital-image"
      />
      
      </div>
      <div className='sevdiv'>
      <Image
        src={logo}
        alt="Hospital Logo" 
        className="hospital-logo"
      />

      <div className="service-description">
        <h2 className="kulandila">WELCOME TO THE OPD SERVICE</h2>
        <p className="mawu">This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office</p>
       
      </div>
     
      </div>
     <Link href="/Appointment">
     <div className='divyabt'>
      <Button/>
     </div>
     </Link>
    </div>
    <Footer/>
    </>
   
  );
}

export default Service;
