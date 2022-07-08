import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/project_0.png'
import IMG1 from '../../assets/project_1.png'
import IMG2 from '../../assets/project_2.png'
import IMG3 from '../../assets/project_3.png'
import IMG4 from '../../assets/project_4.png'

const data = [
{
  id: 0,
  image: IMG0,
  title: 'Python Game Blueprints',
  github: 'https://github.com/IvanVuytsik/python-rpg-box',
  demo: 'https://www.youtube.com/channel/UCwNV-AEok2W6LEan95xZicQ/videos',
  status: 'flex',
},
{
  id: 1,
  image: IMG1,
  title: 'Three.js Earth',
  github: 'https://github.com/IvanVuytsik/earth_element',
  demo: 'https://earthelement.vercel.app/',
  status: 'flex',
},
{
  id: 2,
  image: IMG2,
  title: 'Spellpot Studio',
  github: '',
  demo: 'https://spellpot.com/',
  status: 'none',
},
{
  id: 3,
  image: IMG3,
  title: 'Three.js Witch Moon',
  github: 'https://github.com/IvanVuytsik/threemoon',
  demo: 'https://witchhut.vercel.app/',
  status: 'flex',
},
{
  id: 4,
  image: IMG4,
  title: 'MERN Blog',
  github: 'https://github.com/IvanVuytsik/api',
  demo: 'https://blog-tsq.herokuapp.com/',
  status: 'flex',
},
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, status}) => {
            return ( 
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' style={{display: `${status}`}}>Github</a>
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