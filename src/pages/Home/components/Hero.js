/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Data from '../HeroImgData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import { Container, Row, Col } from 'reactstrap';
import SwiperCore, { Autoplay } from 'swiper';
import Fade from 'react-reveal/Fade';
const Hero = () => {
  SwiperCore.use([Autoplay])
  return (
    <section className="py-10 bg-no-repeat bg-left-bottom md:bg-center" style={{ backgroundImage: "url(" + + ")", position: "sticky", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
      <Container className="shadow-red-500/50" >
        <Swiper pagination={true} navigation={true} className="mySwiper py-14 rouded-2xl" autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}>
          <Fade left>
            {Data.map((items, index) => {
              return (

                <SwiperSlide className="rouded-2xl" >
                  {/* <HeroCard img={items.img} stext={items.stext} /> */}
                  <img src={items.img}/>
                    <Row className="align-items-center">
                      <Col lg={6}>

                        <Swiper pagination={true} navigation={true} className="mySwiper py-14 rouded-2xl" autoplay={{
                          delay: 4000,
                          disableOnInteraction: false
                        }}>
                          <Fade left>
                            {Data.map((items, index) => {
                              return (

                                <SwiperSlide className="rouded-2xl" >
                                  {/* <HeroCard img={items.img} stext={items.stext} /> */}
                                  <div className="text-4xl md:text-7xl py-16 capitalize">

                                    {items.title}



                                  </div>
                                  <button className="px-4 py-2 bg-green-500 rounded-full">Read More</button>
                                </SwiperSlide>

                              )
                            })}
                          </Fade>
                        </Swiper>
                      </Col>
                    </Row>
                </SwiperSlide>

              )
            })}
          </Fade>
        </Swiper>

      </Container>
    </section>
  );
}
export default Hero;