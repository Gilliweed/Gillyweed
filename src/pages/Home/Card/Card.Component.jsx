import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,MDBBtn,MDBCol,MDBIcon,
} from "mdb-react-ui-kit";

import "./Card.css";

const CardT = (props) => {
  return (
    <MDBRow>
      <MDBCol md=''>
        <MDBCard
          className='card-image py-5'
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='chart-pie' /> Marketing
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      
    </MDBRow>
  )
}

export default CardT;