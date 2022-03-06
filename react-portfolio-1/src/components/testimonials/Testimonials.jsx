import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Show',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor unde dignissimos, temporibus expedita aut. Aliquid ipsum laborum, quibusdam dignissimos obcaecati nam accusantium maiores ratione ipsa magnam quia rerum sequi.'
    },
    {
        avatar: AVTR2,
        name: 'Ekpedeme Richard',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor unde dignissimos, temporibus expedita aut. Aliquid ipsum laborum, quibusdam dignissimos obcaecati nam accusantium maiores ratione ipsa magnam quia rerum sequi.'
    },    {
        avatar: AVTR3,
        name: 'Sylvester Taylor',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor unde dignissimos, temporibus expedita aut. Aliquid ipsum laborum, quibusdam dignissimos obcaecati nam accusantium maiores ratione ipsa magnam quia rerum sequi.'
    },    {
        avatar: AVTR4,
        name: 'Boris Brown',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor unde dignissimos, temporibus expedita aut. Aliquid ipsum laborum, quibusdam dignissimos obcaecati nam accusantium maiores ratione ipsa magnam quia rerum sequi.'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
            
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt='client avatar'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    }) 
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
