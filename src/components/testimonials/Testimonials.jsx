import React from 'react'
import './testimonials.css'
import AVT_0 from '../../assets/avatar_0.png'
import AVT_1 from '../../assets/avatar_1.png'
import AVT_2 from '../../assets/avatar_2.png'
import AVT_3 from '../../assets/avatar_3.png'
 
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 

const data = [
  {
  avatar: AVT_0,
  name: 'Street Wizard',
  review: 'I have gotten at least 10 times the value from Ivan.'
  }, 
  {
  avatar: AVT_1,
  name: 'Paladin Mike',
  review: 'That was a pleasure working with Ivan. Would love to do that again.',
  },
  {
  avatar: AVT_2,
  name: 'Adam',
  review: 'Ivan has totally changed the nature of our business.',
  },
  {
  avatar: AVT_3,
  name: 'Josh Royal',
  review: 'Precise and swift execution. Highly recommend.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What They Say</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}>
 
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide> 
            )
          })
        }
 
      </Swiper>
    </section>
  )
}

export default Testimonials
 