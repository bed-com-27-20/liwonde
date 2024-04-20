import React from 'react'
import './patient.css'
import Navbar from "@/componets/navbar"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/componets/footer';
import ScrollToTopButton from '../Scroll/scroll';

export default function Patient(){
   

    return(
        <>
        <Navbar/>
        <div className='mx-auto max-w-10xl px-6 lg:px-8  w-full '
         
        >
            <p className='text-center text-4xl text-green-900 font-extrabold mt-60'>Patient and Visitors</p>
             <p className='text-center text-2xl text-green-700 font-bold mt-10'>follow our visiting schedule and patient discharge information</p>

             <div className='flex flex-row justify-center'>
             <div style={{
                width:'400px',
                height:'300px',
                backgroundColor:'green',
                borderRadius:'10px'
             }} className='mb-10 mt-5 justify-center shadow '>
             <p className='text-center text-white text-2xl mt-3'>Visiting Hours</p>

             
          </div>
          <div style={{
                width:'400px',
                height:'300px',
                backgroundColor:'green',
                borderRadius:'10px'
             }} className='mb-10 mt-5 justify-center shadow  border-white'>
             <p className='text-center text-white text-2xl mt-3 '>Patient Admit and Discharge</p>
             
          </div>
          <div style={{
                width:'400px',
                height:'300px',
                backgroundColor:'green',
                borderRadius:'10px'
             }} className='mb-10 mt-5 justify-center shadow '>
             <p className='text-center text-white text-2xl mt-3'>Prices</p>
             
          </div>
         
         
             </div>
      
        </div>
        <ScrollToTopButton/>
        <Footer/>
        </>
    )
}