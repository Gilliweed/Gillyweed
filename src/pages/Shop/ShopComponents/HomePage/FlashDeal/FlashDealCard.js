import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import '../carasoule.css';
const FlashDealCard = ({data}) => {
  return (
    <div>
      <Card
        className=" text-dark border-0 rounded-3xl"
      >
        <NavLink to={`/productDesc/${data._id}` } exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={data.img}
                alt={data.img}
                className=" w-full h-64 md:h-70 sm:h-46  object-center object-fill  z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{data.rating}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="mx-2 rounded-xl z-auto">
          <div className=''>
            <div className="font-mono text-2xl font-semibold flex m-2 justify-center">
              {data.title}
            </div>
            <div className="text-xl flex m-2 justify-center">₹{data.price}</div>
          </div>
          {/* <div className="flex m-2 justify-center">
            <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" />
          </div> */}
        </div>
      </Card>
    </div>
  );
};
export default FlashDealCard;
