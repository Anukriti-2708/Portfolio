
import './contact.css'
import hedwig from '../images/hedwig-r.png'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
     
 const [isMessageSent, setMessageSent] = useState(false);
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzn9efv', 'template_4z03f1s', form.current, 'g6xMrgHtYYfFb8uuB')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);

        setTimeout(() => {
              setMessageSent(false);
            }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };
    
    
  return (
    <div className='contacts'>
       <div class="custom-shape-divider-top-1690922334">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='content'>
        <img src={hedwig} alt='owl-post' className='img' />
        
        
        <div className='form'>
         <div className='form-heading'>
          <h3>Send Me a Letter!</h3>
        </div>
          {isMessageSent && <div className='message-popup'>Letter Delivered!</div>} 
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group"> 
              <input type="text" name="name" id="name" required  />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" id="user_email" required  />
              <label htmlFor="email">Email ID</label>
              </div>
            <div className="form-group">
              <textarea name="message" id="content" required ></textarea>
              <label htmlFor="content">Message</label>
              </div>
            <button type="submit">Send Email</button>
          </form>
        </div>
        

      </div>
   </div>
  )
}

export default Contact