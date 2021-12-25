import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Card from '@mui/material/Card';
import BlogCard from './BlogCard';
const TESTIMONIALS_DATA = [
  
    {
      // image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },

  
  
    {
      // image: testimonialsImage3,
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
      username: '@hi.veona',
      name: 'Veona Watson',
    },

  
  
    {
      // image: testimonialsImage5,
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: '@cherice.me',
      name: 'Cherice Justin',
    },

  
  
    {
      // image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
 
  
  
    {
      // image: testimonialsImage4,
      text:
        'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
      username: '@hey.nku',
      name: 'Paseka Nku',
    },
  
  
    {
      // image: testimonialsImage6,
      text:
        'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
      username: '@myself.thais',
      name: 'Thais Carballal',
    },
  
];

export default function FixedColumns() {

    const testimonialCarousel = {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      centeredSlides: true,
      autoHeight: true,
      autoplay: {
        waitForTransition: false,
        delay: 4000,
      },
      breakpoints: {
        360: {
          slidesPerView: 1.75,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    };
  return (
    <><Swiper {...testimonialCarousel}>
    {TESTIMONIALS_DATA.map((item, index) => (
      
          <SwiperSlide key={index}>
          {/* {item.map(({ image, text, name, username }, _index) => ( */}
              <BlogCard className="my-5" key={index}>
              {/* {text} */}
              </BlogCard>
              <BlogCard className="my-5" key={index}>
              {/* {text} */}
              </BlogCard>
            {/* ))} */}
          </SwiperSlide>
        ))}
    </Swiper>
    
    </>
  );
}