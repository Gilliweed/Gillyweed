import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// import '../carasoule.css';
const FlashDealCard = (props) => {
  return (
    <div>
      <Card
        className=" text-dark border-0"
        style={{
          width: '100%',
          height: '17rem',
          // boxShadow: '5px 5px 5px  grey',
        }}
      >
        <NavLink to="/productDesc " exact>
          <Card.Img
            className=" text-dark border-0"
            src={props.img}
            alt="Card image"
            style={{ width: '100%', height: '11rem' }}
          />

          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{props.para}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <Card className=" text-dark border-0">
          <Card.Title>{props.head}</Card.Title>

          <Button variant="outline-success">
            <ShoppingCartOutlined /> Add
          </Button>
        </Card>
      </Card>
    </div>
  );
};
export default FlashDealCard;
