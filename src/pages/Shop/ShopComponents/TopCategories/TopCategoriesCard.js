import * as React from 'react';
import { Row, Col,  Card } from 'react-bootstrap';

// import './TopCategories.css';
const TopRatingCard = (props) => {
  return (
    <div style={{}}>
      <Row>
        <Col style={{}}>
          <Card
          className="bg-dark text-white"
            style={
              ({ width: '10.3rem' },
              { height: '12rem' },
              { boxShadow: '5px 5px 5px grey' })
            }
          >
            <Card.Img
              style={{ width: '20.5rem', height: '12rem' }}
              src={props.img}
            />
            <Card.ImgOverlay>
              <Card.Title>{props.head}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default TopRatingCard;
