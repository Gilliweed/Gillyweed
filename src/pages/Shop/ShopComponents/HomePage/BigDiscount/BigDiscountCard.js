import { getThemeProps } from '@mui/system';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import React from 'react';
// import './BigDiscount.css';
const BigDiscountCard = ({data}) => {
  console.log("big discount card ", data);
  return (
    <div>
      <Card className=" text-dark border-0">
        <NavLink to={`/productDesc/${data._id}`}  exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={data.img}
                alt={data.img}
                className="bg-gray w-full h-72 object-center object-contain z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>12% off</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="mx-2 rounded-xl z-auto">
          <div className="">
            <div className="font-mono text-2xl font-semibold flex m-2 ">
              {data.title}
            </div>
            <div className="font-mono  font-semibold flex m-2 ">
              {/* {data.desc} */}
            </div>
            <div className="flex m-2 ">
              <div className="line-through"> ₹{data.price}</div>
              <div className="text-xl ml-2">₹{data.discountprice}</div>
            </div>
          </div>
          <div className="flex m-2 justify-center">
           
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BigDiscountCard;
