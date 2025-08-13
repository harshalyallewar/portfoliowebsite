import React from 'react'
import avatar from '../../assets/avatar.png'
import himanshu from "../../assets/himanshu.jpg";
import './testimonials.css'

import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Testimonials = () => {

  const data = [
    {
      avatar: himanshu,
      name: "Himanshu Agarkar",
      href: "https://www.linkedin.com/in/agarkarh/",
      review:
        "Having worked closely with Harshal on multiple projects, I can confidently attest to his exceptional skills, determination, and dedication to achieving a specific goal. His deep knowledge of DSA and Full Stack Development Technologies combined with the thrust of curiosity and continuous acquiring of novel skills sets him apart.",
    },
    {
      avatar: avatar,
      name: "Rohan Patil",
      href: "https://www.linkedin.com/in/rohan-d-patil/",
      review:
        "Harshal is incredibly dedicated and passionate about his goals. His clarity of thought makes him a genuine person, and his commitment to learning anything new is remarkable. With his skills and determination, he is undoubtedly an excellent developer",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from Peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {data.map((review) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={review.avatar} alt="" />
              </div>

              <a
                className="clientNameHyperLink"
                href={review.href}
                target="_blank"
              >
                <h5 className="client_name">{review.name}</h5>
              </a>
              <small className="client_review">{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials