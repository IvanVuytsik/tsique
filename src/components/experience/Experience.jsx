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
              <h4>CSS, Tailwind</h4>
            </div> 
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>JS/TS</h4>
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

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Redux Toolkit</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>React Native</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>ThreeJS/Fiber</h4>
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
              <h4>Docker</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>REST</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Express</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Node</h4>
            </div>
          </article>

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Next</h4>
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

          <article className="experience__details">
            <BsCheckCircle className='experience__details-icon'/>
            <div>
              <h4>Synfig</h4>
            </div>
          </article>

         </div>
      </div>

    </div>


    </section>
  )
}

export default Experience