import React from 'react'
import './about.css'
import IMG from '../../assets/welcome.png'

import {BiCrown} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn More</h5>
      <h2>About Me</h2> 
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={IMG} alt='About Image' /> 
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <BiCrown className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>

          <p>
            My name is Ivan. Programming and design have been my passions for a while now. Recently, I have decided to pursue this opportunity as a full time occupation. Please do not hesitate to get in touch if you have something fun or creative in mind.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About