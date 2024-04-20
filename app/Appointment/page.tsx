"use client";
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./Appointment.css";
// import icon from "../images/icon.png";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import old from '../images/old.webp'

// const EmailForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     // Your EmailJS service ID, template ID, and Public Key
//     const serviceId = "service_02b734q";
//     const templateId = "template_obb37u6";
//     const publicKey = "B0GeSrdcYghC96Jeo";

//     // Create a new object that contains dynamic template params
//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: "liwondepvthospital",
//       message: message,
//     };

//     // Send the email using EmailJS
//     emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         alert("Email sent successfully")
//         setName("");
//         setEmail("");
//         setMessage("");
//       })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //       alert("Email not ,please check your connection")
  //     });
  // };
  // return (
  //   <div>
  //     <section id="box">

  //       <Image className="Logo" alt="" src={icon} height={150} width={150} />
  //       <div>
  //       <TypeAnimation className="book-head"
  //               sequence={[
  //                 "welcome To Booking Section",
  //                 1000,
  //                 " Fill the Form On The Right",
  //                 1000,
  //                 "Check Your Email, For Respons",
  //               ]}
  //               speed={10}
  //               style={{ fontSize: "2em" }}
  //               repeat={Infinity}
  //             />
      //   </div>
      //   <div className="imag">
      //      <Image
      //         alt=""
      //         src={old}
      //         width={400}
      //         height={600}
      //      />
      //   </div>
      //  <div>
      //   <ul>
      //     <li>The Form on the right fill the details</li>
      //     <li>The Form on the right fill the details</li>
      //     <li>The Form on the right fill the details</li>
      //   </ul>
      //  </div>
       
      // </section>
      // <div className="box">
      //   <form action="" className="email-form" onSubmit={handleSubmit}>
      //     <h2>Book Appointment</h2>
      //     <div className="inputBox">
      //       <input
      //         type="text"
      //         placeholder=""
      //         value={name}
      //         onChange={(e) => setName(e.target.value)}
      //         className="name"
      //         required
      //       />
      //       <span className="span">Name</span>
      //       <i className="span-name"></i>
      //     </div>
      //     <div className="inputBox">
      //       <input
      //         className="name"
//               type="email"
//               placeholder=""
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <span className="span">Email</span>
//             <i className="span-name"></i>
//           </div>
//           <div className="inputBox">
//             <textarea
//               placeholder="please this text filled include ..phone number..and fullname"
//               id="text-area"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//           </div>

//           <button className="email-button" type="submit">
//             Send Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmailForm;
import React,{useState} from 'react'
import './Appointment.css';
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';

function Page() {

  const [name,setName] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDob] = useState('');
  const [address,setAddress] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [kin,setKin] = useState('');
  const [relationship,setRelationship] = useState('');
  const [kinPhone,setKinPhone] = useState('');
  const [reason,setReason] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');

  const handelSubmition = () => {
    //Submition Form data here
    console.log('mwatumiza appointment')
  };

  return (
    <div>
      <Header/>
      <div className="MrLa">
      <img src="https://avatars.mds.yandex.net/i?id=ec92a0aa2511ef7c39d5196bb1b67eb991a19876-9025500-images-thumbs&n=13" alt="Medical" className="image"/>
      <form className="platinum">
        <div className="section">
          <h3>PATIENT INFORMATION</h3>
          <label>Name</label>
          <input type="text" id="ergtx" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <label>Gender</label>
          <select id="ingtx" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label>Date of Birth</label>
          <input type="date" id="ergtx" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required/>
          <label>Address</label>
          <input type="text" id="ergtx" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          <label>Email</label>
          <input type="email" id="ergtx" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label>Phone Number</label>
          <input type="tel" id="ergtx" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        </div>
        <div className="section">
          <h3>KIN INFORMATION</h3>
          <label>Next of Kin</label>
          <input type="text" id="ergtx" name="kin" value={kin} onChange={(e) => setKin(e.target.value)} required/>
          <label>Relationship</label>
          <input type="text" id="ergtx" name="relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)} required/>
          <label>Phone Number</label>
          <input type="tel" id="ergtx" name="kinPhone" value={kinPhone} onChange={(e) => setKinPhone(e.target.value)} required/>
          <label>Reason for Visit</label>
          <textarea id="reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} required/>
        </div>
        <div className="section">
          <h3>APPOINTMENT TIME/DATE</h3>
          <label>Date</label>
          <input type="date" id="ergtx" name="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
          <label>Approximate Time</label>
          <input type="time" id="ergtx" name="time" value={time} onChange={(e) => setTime(e.target.value)} required/>
        </div>
        <button id='apsb' type="submit" onClick={handelSubmition}>Send Request</button>
      </form>
      <p>We Treat and God Heals</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Page