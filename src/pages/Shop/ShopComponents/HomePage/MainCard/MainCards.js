import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import './Carasoule.css'
const MainCard = (props) => {
  return (
    <NavLink to="/productDesc " exact style={{ color: 'black' }}>
    <div
      className=""
      style={{
        display: 'flex',
        justifyItems: 'flex-end',
        textAlign: 'center',
        alignContent: 'flexCenter',
        width: '100%',
      }}
    >
      
        <Card
          className="container border-0"
          style={{
            flex: '1',
            alignContent: 'center',
            textAlign: 'center',
            justifyItems: 'flex-center',
            width: '100%',
            height: '6rem',
          }}
        >
          <Card className="container border-0" style={{ marginTop: '50px' }}>
            <h1>{props.head}</h1>
          </Card>
          <Card className="container border-0" style={{ marginTop: '25px' }}>
            <p>{props.para}</p>
          </Card>
        </Card>
    
      <Card
        className="container border-0"
        style={{ flex: '1', width: '100%', height: '20rem' }}
      >
          <img style={{ width: '100%', height: '20rem' }} src={props.img} />
      </Card>
      {/* </NavLink> */}
    </div>
    </NavLink>
  );
};
export default MainCard;
