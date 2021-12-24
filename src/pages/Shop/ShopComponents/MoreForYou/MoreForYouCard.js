import * as React from 'react';
import {Row ,Col ,Button,Card} from 'react-bootstrap';
import Paper from '@mui/material/Paper';
const TopRatingCard = (props) => {
    return (
        <div style={{}}>

            <Row>
                <Col style={{}}>
                    <Card style={{ width: '28rem',margin:"5px" }, { height: '12rem' }, { boxShadow: "5px 5px 5px grey" }}>
                        <img style={{ width: '28rem' }, { height: '9rem' }} src={props.img} />
                        <Row>
                            <Col>
                                <h5>{props.head}Name</h5>

                            </Col>
                            <Col sm={4}>
                                <Button lg style = {{marginLeft:"-14px" ,marginTop:"14px"}}>Add</Button>
                            </Col>
                        </Row>


                    </Card>
                </Col>

            </Row>

        </div>
    );
}
export default TopRatingCard;