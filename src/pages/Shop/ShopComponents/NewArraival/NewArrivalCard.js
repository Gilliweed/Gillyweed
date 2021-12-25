import * as React from 'react';
import {Row ,Col ,Button,Card} from 'react-bootstrap';
import Paper from '@mui/material/Paper';

const TopRatingCard = (props) => {
    return (
        <div style={{}}>
          <Row>
            <Col style={{}}>
              <Card
              
                style={{
                  width: '11rem',
                  height: '16rem',
                  boxShadow: '3px 3px 5px  grey',
                }}
              >
                {/* <img style={{ width: '6rem' }, { height: '8rem' }} src={props.img} />
                            <Row>
                                <Col>
                                    <h5>{props.head}</h5>
    
                                </Col>
                                <Col sm={4}>
                                    <Button lg style={{marginLeft:"-17px" , marginTop:"12px"}}>Add</Button>
                                </Col>
                            </Row> */}
                <Card.Img
                className="bg-dark text-white"
                  src={props.img}
                  alt="Card image"
                  style={({ width: '6rem' }, { height: '10rem' })}
                />
                {/* <Card.ImgOverlay>
                  <Card.Title>{props.para}</Card.Title>
                </Card.ImgOverlay> */}
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