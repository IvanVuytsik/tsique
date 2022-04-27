import React from 'react'
import './footer.css'

import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {IoLogoGameControllerA} from 'react-icons/io'

const Footer = () => {
  return (
    <footer> 
      <a href="#" className="footer__logo">tsique.art</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ivan-vuytsik-82708471/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/IvanVuytsik" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCwNV-AEok2W6LEan95xZicQ" target="_blank"><GrYoutube/></a>
        <a href="https://powerhamster.itch.io/" target="_blank"><IoLogoGameControllerA/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; tsique.art. All rights reserved.</small>
      </div>

    </footer>
  )
}


export default Footer




 
