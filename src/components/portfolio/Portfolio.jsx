import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/project_0.png'
import IMG1 from '../../assets/project_1.png'
const data = [
{
  id: 0,
  image: IMG0,
  title: 'Python Game Blueprints',
  github: 'https://github.com/IvanVuytsik/python-rpg-box',
  demo: 'https://www.youtube.com/channel/UCwNV-AEok2W6LEan95xZicQ/videos',
},
{
  id: 1,
  image: IMG1,
  title: 'Three.js Earth',
  github: 'https://github.com/IvanVuytsik/earth_element',
  demo: 'earthelement.vercel.app/',
},
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return ( 
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
              )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio