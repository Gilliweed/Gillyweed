import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import MCard from './ShopCard';
// Import Swiper styles


// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);
const TESTIMONIALS_DATA = [
  [
    {
      image: 'https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },

  ],
  [
    {
      image: 'https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
      username: '@hi.veona',
      name: 'Veona Watson',
    },

  ],
  [
    {
      image: "https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: '@cherice.me',
      name: 'Cherice Justin',
    },

  ],
  [
    {
      image: "https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
 
  ],
  [
    {
      image: "https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
      username: '@hi.veona',
      name: 'Veona Watson',
    },

  ],
  [
    {
      image: "https://images.unsplash.com/photo-1640301133484-9d016ef6f9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: '@cherice.me',
      name: 'Cherice Justin',
    },
    
  ],
];
export default function CardDeck() {
  return (
    <>
    
      <Swiper effect={"cards"} grabCursor={true} style={{width:'40vh'}} className="rounded-2">
      {TESTIMONIALS_DATA.map((item, index) => (
      
      <SwiperSlide key={index}>
      {item.map(({ image, text, name, username }, _index) => (
          <MCard className="my-5" key={_index} text={text} image={image} title={name} alt={username}/>
        ))}
      </SwiperSlide>
    ))}
      </Swiper>
    </>
  );
}
