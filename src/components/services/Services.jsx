import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
 
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* PROGRAMMING */}
        <article className='service'>
          <div className='service__head'>
            <h3>Programming</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div><BsCheck2 className='service__list-icon' /></div>
              <p>Backend development using Python</p>
            </li>
            <li>
              <div><BsCheck2 className='service__list-icon' /></div>
              <p>Frontend development using JavaScript</p>
            </li>
            <li>
              <div><BsCheck2 className='service__list-icon' /> </div>
              <p>Development of desktop and mobile games using Godot</p>
            </li>
          </ul>
        </article>
        {/* END OF PROGRAMMING */}

        {/* DESIGN */}
        <article className='service'>
          <div className='service__head'>
            <h3>Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div><BsCheck2 className='service__list-icon' /></div>
              <p>I draw icons, small assets and 2D graphics</p>
            </li>
            <li>
              <div><BsCheck2 className='service__list-icon' /></div>
              <p>I work with 3D graphics using Blender and voxel editors</p>
            </li>
            <li>
              <div><BsCheck2 className='service__list-icon' /></div>
              <p>I use Figma to design UI/UX</p>
            </li>
          </ul>
        </article>
        {/* DESIGN */}

      </div>
    </section>
  )
}

export default Services