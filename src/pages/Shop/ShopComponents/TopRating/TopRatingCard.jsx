import * as React from 'react';
import {Row ,Col ,Button,Card} from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import './TopRating.css';
const TopRatingCard = (props) => {
    return (
        <div style={{}}>

            <Row>
                <Col style={{}}>
                    <Card style={{ width: '16rem' }, { height: '8rem' }, { boxShadow: "5px 5px 5px grey" }}>
                        <img style={{ width: '28rem' }, { height: '8rem' }} src={props.img} />
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
    );
}
export default TopRatingCard;