import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
// import '../carasoule.css';
const FlashDealCard = (props) => {
  return (
    <div style={{}}>
      <Row>
        <Col style={{}}>
          <Card
            style={{
              width: '15rem',
              height: '19rem',
              boxShadow: '5px 5px 5px  grey',
            }}
          >
            {/* <img style={{ width: '28rem' }, { height: '14rem' }} src={props.img} /> */}
            <Card.Img
              src={props.img}
              alt="Card image"
              style={({ width: '28rem' }, { height: '13.5rem' })}
            />
            <Card.ImgOverlay ClassName = "text-white">
              <Card.Title ClassName = "text-white">{props.para}</Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{props.head}</Card.Title>
              <Button variant="success">Add</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default FlashDealCard;
