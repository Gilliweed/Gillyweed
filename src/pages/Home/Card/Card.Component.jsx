import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

import "./Card.css";

const CardT = (props) => {
  return (
    <MDBCard style={{ maxWidth: "18rem" }}>
      <MDBCardBody>
        <MDBCardTitle>{props.text}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardT;
