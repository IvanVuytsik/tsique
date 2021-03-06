import React from 'react'
import './header.css'
import HeaderSocials from './Socials'
import CTA from './CTA'
// import Toggler from './Toggler'
import Scene from '../scene/Scene'
import IMG from '../../assets/codebear.png'


const Header = () => {
 
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

          <div className='header__intro'>
            <div className='header__intro-image'>
              <img src={IMG} alt='Intro Image' /> 
            </div>
          </div>

          {/* <Toggler />
          <div className="theme-toggler">
            <span className="material-icons-sharp">light_mode</span>
            <span className="material-icons-sharp active">dark_mode</span>
          </div>  */}
          

          <a href="#contact" className="scroll__down">Scroll Down</a>

        </div>
    </header>
  )
}

export default Header