import React from 'react'
import './header.css'
import HeaderSocials from './Socials'
import CTA from './CTA'
import Scene from '../scene/Scene'
import ALT_IMG from '../../assets/codebear.png'


const themeToggler = document.querySelector(".theme-toggler");

function Toggler() {
  if(themeToggler) { 
    return (
        themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('light-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle("active");
        themeToggler.querySelector('span:nth-child(2)').classList.toggle("active");
        })
    )
  }
}

const Header = () => {
  // <Toggler />
  return (
    <header>
        <div className="container header__container">
          <h5>Hello, I am</h5>
          <h1>Ivan</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          
          <CTA />
          <HeaderSocials />
           
          <div className='three__scene'>
            <Scene /> 
          </div> 

          <div className="me">
            <img src={ALT_IMG} alt="me" /> 
          </div> 
          
          {/* ----------------LIGHT AND DARK THEMES--------------- */}
          {/* <div className="theme-toggler">
            <span className="material-icons-sharp">light_mode</span>
            <span className="material-icons-sharp active">dark_mode</span>
          </div> 
          <Toggler /> */}
          
          <a href="#contact" className="scroll__down">Scroll Down</a>

        </div>
    </header>
  )
}

export default Header