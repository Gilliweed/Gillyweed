import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../carasoule.css';
const FlashDealCard = (props) => {
    return (
        <div style={{}}>

            <Row>
                <Col style={{}}>
                    <Card style={{ width: '28rem' }, { height: '22rem' }, { boxShadow: "5px 5px 5px grey" }}>
                        <img style={{ width: '28rem' }, { height: '14rem' }} src={props.img} />
                        <Row>
                            <Col>
                                <h5>{props.head}Name</h5>

                            </Col>
                            <Col sm={4}>
                                <Button lg>Add</Button>
                            </Col>
                        </Row>


                    </Card>
                </Col>

            </Row>

        </div>
    )
}
export default FlashDealCard;