import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import './Carasoule.css'
const MainCard = (props) => {
    return (
        <div className="" style={{}}>
            <Row style = {{}}>
                <Col style ={{paddingTop:'3rem'}}>
                    {/* <Row> */}
                        <Card className= " border-0" style={{ width: '30rem' }, { height: '6rem' }}>
                            <h1>{props.head}</h1>
                        </Card>
                    {/* </Row> */}
                    {/* <Row> */}
                        <Card className= " border-0" style={{ width: '30rem' }, { height: '5rem' }}>
                            {props.para}
                        </Card>
                    {/* </Row> */}
                </Col>

                <Col >
                    <Card style={{ width: '30rem' }, { height: '20rem' }}>
                        <img style={{ width: '30rem' }, { height: '20rem' }} src={props.img} />
                    </Card>
                </Col>
            </Row>

            {/* </Box> */}

        </div>
    )
}
export default MainCard;