import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'react-bootstrap';
import NewArrival from './NewArrivalCard';
import NewArrivalData from '../CardsData/NewArrival';
// import './NewArrival.css';
import Icon from '@mui/icons-material/FlightLand';
import { NavLink } from 'react-router-dom';
import Btn from '../../../../../components/btn/btn';

const NewArrivalSlider = () => {
  
  return (
    <>
      <div className="mx-4 my-3 border-0 " style={{
            // width: '95%',
          }}>
        <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
         
          <div className='flex '>
          <h2 className=' text-5xl'>New Arrival</h2>
          </div>
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 4,
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
                price = {product.price}
                detail = {product.detail}
              ></NewArrival>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: 'white' }}
        >
         <Card.Link className="text-right" href="#">
         <Btn link="/moreProducts" title="More" styles="bg-red-400 text-white"/>
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default NewArrivalSlider;
