import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import './FeaturedBrand.css';
const FlashDealCard = ({data}) => {
  return (
    <div>
      <Card className=" text-dark border-0">
        <NavLink to={`/productDesc/${data._id}` } exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={data.img}
                alt={data.img}
                className=" w-full h-56 object-center object-contain z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{data.rating}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="mt-2 rounded-xl z-auto">
          <div className="">
            <div className="font-mono text-xl font-semibold flex mt-2 ">
              {data.title.substring(0,15)}
            </div>
            <div className='m'>
              <p>Black And Grey</p>
            </div>
            <div className="flex m ">
              <div className="text-xl ">₹{data.price}</div>
            </div>
          </div>
          <div className="flex m-2 justify-center">
           
          </div>
        </div>
      </Card>
    </div>
  );
};
export default FlashDealCard;
