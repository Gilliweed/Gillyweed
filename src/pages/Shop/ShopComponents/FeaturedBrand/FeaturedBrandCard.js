import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
// import './FeaturedBrand.css';
const FlashDealCard = (props) => {
    return (
        <div style={{}}>

            <Row>
                <Col style={{}}>
                    <Card style={{ width: '6rem' }, { height: '8rem' }, { boxShadow: "5px 5px 5px grey" }}>
                        <img style={{ width: '6rem' }, { height: '8rem' }} src={props.img} />
                        <Row>
                            <Col>
                                <h5>{props.head}</h5>

                            </Col>
                            <Col sm={4}>
                                <Button lg style={{marginLeft:"-17px" , marginTop:"12px"}}>Add</Button>
                            </Col>
                        </Row>


                    </Card>
                </Col>

            </Row>

        </div>
    )
}
export default FlashDealCard;