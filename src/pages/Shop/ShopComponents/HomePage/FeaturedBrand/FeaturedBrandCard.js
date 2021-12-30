import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import './FeaturedBrand.css';
const FlashDealCard = (props) => {
  return (
    <div>
      <Card className=" text-dark border-0">
        <NavLink to="/productDesc " exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={props.img}
                alt={props.img}
                className=" w-full h-96 object-center object-cover z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{props.para}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="mx-2 rounded-xl z-auto">
          <div className="">
            <div className="font-mono text-2xl font-semibold flex m-2 ">
              {props.head}
            </div>
            <div className='m-2'>
              <p>Black And Grey</p>
            </div>
            <div className="flex m-2 ">
              <div className="text-xl ml-1">{props.price}</div>
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
