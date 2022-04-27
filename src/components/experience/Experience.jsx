import React from 'react'
import './experience.css'
import {BsCheckCircle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My Skill Set</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
    {/*-----------------------FRONTEND SECTION--------------------*/}
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon' />
            <div> 
              <h4>HTML</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon' />
            <div> 
              <h4>CSS</h4>
            </div> 
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>React</h4>
            </div>
          </article>

        </div>
      </div>

      {/*------------------------BACKEND SECTION---------------------*/}
      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Django</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>DRF</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>PostgreSQL</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Docker</h4>
            </div>
          </article>

        </div>
      </div>

      {/*----------------------------AUX SECTION------------------------*/}
      <div className='experience__technologies'>
        <h3>Auxiliary Technologies</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Blender</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Godot</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Aseprite</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>MagicaVoxel</h4>
            </div>
          </article>

           <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Figma</h4>
            </div>
          </article>

         </div>
      </div>

    </div>


    </section>
  )
}

export default Experience