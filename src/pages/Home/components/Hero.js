import Data from '../HeroImgData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import { Row, Col } from 'reactstrap';
import SwiperCore, {Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade"

const Hero = () => {
  SwiperCore.use([Autoplay,EffectFade])
  return (
    <section className="  bg-no-repeat bg-left-bottom md:bg-center rounded-2xl" >
      <div className=" rounded-2xl" >
        <Swiper className="mySwiper " autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }} effect={'fade'}> 
            {Data.map((items, index) => {
              return (
                <SwiperSlide className=" rouded-lg bg-center pb-24" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(" +items.img+ ")", position: "sticky", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} >
                    <Row className="align-items-center">
                      <Col lg={8}>
                        <Swiper className="mySwiper py-32 rouded-2xl " autoplay={{
                          delay: 4000,
                          disableOnInteraction: false}}>                         
                            {Data.map((items, index) => {
                              return (
                                <SwiperSlide className="rouded-2xl p-6 md:p-14" >
                                  <div className="text-4xl text-bold md:text-7xl py-16 capitalize text-white">
                                    {items.title}
                                  </div>
                                  <button className="px-4 py-2 bg-green-500 rounded-full">Read More</button>
                                </SwiperSlide>
                              )
                            })}
                        </Swiper>
                      </Col>
                    </Row>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </section>
  );
}
export default Hero;