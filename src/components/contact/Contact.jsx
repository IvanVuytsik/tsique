import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

 


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dbz64hd', 'template_31n059d', form.current, 'ZcPgQwObgtyp-YMWi')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* CONTACT OPTION */}
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vuicik1989@gmail.com</h5>
            <a href="mailto:vuicik1989@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@ivuytsik</h5>
            <a href="https://t.me/ivuytsik" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+7 985 8915489</h5>
            <a href="https://api.whatsapp.com/send? phone=79858915489" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Mesage</button>
        </form>


      </div>
    </section>
  )
}

export default Contact