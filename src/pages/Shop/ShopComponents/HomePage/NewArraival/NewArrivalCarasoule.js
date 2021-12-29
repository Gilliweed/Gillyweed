import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'react-bootstrap';
import NewArrival from './NewArrivalCard';
import NewArrivalData from '../CardsData/NewArrival';
// import './NewArrival.css';
import Icon from '@mui/icons-material/FlightLand';
import { NavLink } from 'react-router-dom';


const NewArrivalSlider = () => {
  
  return (
    <>
      <div className=" border-0 " style={{
            // width: '95%',
          }}>
        <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
          <h2>
            <Icon style={{ fontSize: '35px' }} /> New Arrived
          </h2>
        </Card.Header>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '@2.00': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          style={{
            width: '95%',
          }}
        >
          {NewArrivalData.products.map((product) => (
            <SwiperSlide style={{ backgroundColor: '' }}>
              <NewArrival
                img={product.img}
                para={product.text}
                head={product.h1}
              ></NewArrival>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: 'white' }}
        >
         <Card.Link className="text-right" href="#">
          <NavLink to="/moreProducts" exact style={{ color: "black" }}>More</NavLink>
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default NewArrivalSlider;
