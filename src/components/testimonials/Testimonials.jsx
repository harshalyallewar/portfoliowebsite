import React from 'react'
import avatar from '../../assets/avatar.png'
import './testimonials.css'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {

  const data = [
    
    {
    avatar: avatar,
    name:"Harshal Yallewar",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam perspiciatis ad impedit quae fugiat. In temporibus nisi reprehenderit consequatur non distinctio assumenda adipisci nihil veritatis. Unde fugiat quasi voluptate!"
  },
    {
    avatar: avatar,
    name:"Harshal Yallewar",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam perspiciatis ad impedit quae fugiat. In temporibus nisi reprehenderit consequatur non distinctio assumenda adipisci nihil veritatis. Unde fugiat quasi voluptate!"
  },
    {
    avatar: avatar,
    name:"Harshal Yallewar",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam perspiciatis ad impedit quae fugiat. In temporibus nisi reprehenderit consequatur non distinctio assumenda adipisci nihil veritatis. Unde fugiat quasi voluptate!"
  },



]

  return (
    <section id="testimonials">
      <h5>Reviews from Peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map((review) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={review.avatar} alt="" />
              </div>

              <h5 className="client_name">{review.name}</h5>
              <small className="client_review">{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials