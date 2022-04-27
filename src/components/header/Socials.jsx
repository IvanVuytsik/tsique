import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {IoLogoGameControllerA} from 'react-icons/io'

 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ivan-vuytsik-82708471/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/IvanVuytsik" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCwNV-AEok2W6LEan95xZicQ" target="_blank"><GrYoutube/></a>
        <a href="https://powerhamster.itch.io/" target="_blank"><IoLogoGameControllerA/></a>

    </div>
  )
}

export default HeaderSocials