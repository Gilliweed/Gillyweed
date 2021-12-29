import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
   
  ],
  [
    
    {
      image: "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      text:
        'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
      username: '@hey.nku',
      name: 'Paseka Nku',
    },
  ],
  [
    
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      text:
        'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
      username: '@myself.thais',
      name: 'Thais Carballal',
    },
  ],
  [

    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      text:
        'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
      username: '@merryn.manley',
      name: 'Merryn Manley',
    },
  ],
  [
  
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      text:
        'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
      username: '@hey.nku',
      name: 'Paseka Nku',
    },
  ],
  [
    {
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
    
      <Swiper effect={"cards"} grabCursor={true} style={{width:'40vh'}} className="rounded-lg">
      {TESTIMONIALS_DATA.map((item, index) => (
      
      <SwiperSlide key={index} className="rounded-lg" >
      {item.map(({ image, text, name, username }, _index) => (
          <MCard className="my-5" key={_index} text={text} image={image} title={name} alt={username}/>
        ))}
      </SwiperSlide>
    ))}
      </Swiper>
    </>
  );
}
