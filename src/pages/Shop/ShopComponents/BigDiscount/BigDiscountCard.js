import { getThemeProps } from "@mui/system";
import {Card} from 'react-bootstrap';
import React from "react";
// import './BigDiscount.css';
const BigDiscountCard = (props) => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={props.imp} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    {/* <Card.Text>
                        {props.text}
                    </Card.Text> */}
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}
export default BigDiscountCard;




