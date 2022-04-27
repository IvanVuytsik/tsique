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
              <BsCheck2 className='service__list-icon' />
              <p>Backend development using Python</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Frontend development using JavaScript</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Development of desktop and mobile games using Godot</p>
            </li>
            {/* <li>
              <BsCheck2 className='service__list-icon' />
              <p></p>
            </li> */}
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
              <BsCheck2 className='service__list-icon' />
              <p>I draw icons, small assets and 2D graphics</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>I work with 3D graphics using Blender and voxel editors</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>I use Figma to design UI/UX</p>
            </li>
            {/* <li>
              <BsCheck2 className='service__list-icon' />
              <p></p>
            </li> */}
          </ul>
        </article>
        {/* DESIGN */}

      </div>
    </section>
  )
}

export default Services