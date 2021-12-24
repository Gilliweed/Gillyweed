import * as React from 'react';
import {Row ,Col ,Button,Card} from 'react-bootstrap';
import Paper from '@mui/material/Paper';
// import './TopCategories.css';
const TopRatingCard = (props) => {
    return (
        <div style={{}}>

            <Row>
                <Col style={{}}>
                    <Card style={{ width: '10rem' }, { height: '11rem' }, { boxShadow: "5px 5px 5px grey" }}>
                        <img style={{ width: '10rem' }, { height: '10rem' }} src={props.img} />
                    </Card>
                </Col>

            </Row>

        </div>
    );
}
export default TopRatingCard;