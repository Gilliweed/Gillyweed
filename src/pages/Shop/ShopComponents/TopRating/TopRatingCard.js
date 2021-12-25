import * as React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
// import './TopRating.css';
const TopRatingCard = (props) => {
    return (
        <div>
          <Row>
            <Col style={{}}>
              <Card
                className="bg-dark text-white"
                style={
                  ({ width: '6rem' },
                  { height: '8rem' },
                  { boxShadow: '5px 5px 5px grey' })
                }
              >
                <Card.Img
                  src={props.img}
                  alt="Card image"
                  style={({ width: '6rem' }, { height: '12rem' })}
                />
                <Card.ImgOverlay>
                  <Card.Title>{props.para}</Card.Title>
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
export default TopRatingCard;
