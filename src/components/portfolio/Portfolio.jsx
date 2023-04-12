import React from 'react';
import './portfolio.css';
import IMG0 from '../../assets/project_0.png';
import IMG1 from '../../assets/project_1.png';
import IMG2 from '../../assets/project_2.png';
import IMG3 from '../../assets/project_3.png';
import IMG4 from '../../assets/project_4.png';
import IMG5 from '../../assets/project_5.png';
import IMG6 from '../../assets/project_6.png';
import IMG7 from '../../assets/project_7.png';
import IMG8 from '../../assets/project_8.png';
import IMG9 from '../../assets/project_9.jpg';
import IMG10 from '../../assets/project_10.png';
import IMG11 from '../../assets/project_11.png';

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
  title: 'Adventure Game', 
  github: '',
  demo: 'https://ottf-webpage.vercel.app/',
  status: 'none',
},
{
  id: 5,
  image: IMG5,
  title: 'JavaScript Games',
  github: 'https://github.com/IvanVuytsik/KnightsVsEvil',
  demo: 'https://knights-vs-evil.vercel.app/',
  status: 'flex',
},
{
  id: 6,
  image: IMG6,
  title: 'MERN Videonest',
  github: 'https://github.com/IvanVuytsik/Videonest',
  demo: 'https://videonest-tsq.herokuapp.com/',
  status: 'flex',
},
{
  id: 7,
  image: IMG7,
  title: 'React Panel',
  github: 'https://github.com/IvanVuytsik/control_panel',
  demo: 'https://control-panel-beta.vercel.app/',
  status: 'flex',
},
{
  id: 8,
  image: IMG8,
  title: 'JavaScript Agency',
  github: 'https://github.com/IvanVuytsik/digital_agency',
  demo: 'https://digital-agency-eta.vercel.app/',
  status: 'flex',
},
{
  id: 9,
  image: IMG9,
  title: 'PyTactics: Gamified Python Course',
  github: 'https://github.com/IvanVuytsik/PyTactics',
  demo: 'https://powerhamster.itch.io/pytactics',
  status: 'flex',
},
{
  id: 10,
  image: IMG10,
  title: 'React/Fiber Racing',
  github: 'https://github.com/IvanVuytsik/bear_racing',
  demo: 'https://bear-racing.vercel.app/',
  status: 'flex',
},
{
  id: 11,
  image: IMG11,
  title: '3D Object Configurator',
  github: 'https://github.com/IvanVuytsik/3dConfigurator',
  demo: 'https://3d-configurator-phi.vercel.app/',
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