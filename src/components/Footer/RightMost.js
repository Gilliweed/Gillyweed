import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const RightMost = () =>{
    return(
        <div >
 
        <h4 className="gilly ">Help</h4>
        <Col className="para" >
          <Row id="links">
            <NavLink to="/payments" exact style={{ color: "white" }}>Payments</NavLink>
          </Row>
          <Row id="links">
           
            <NavLink to="/shipping" exact style={{ color: "white" }}>Shipping</NavLink>
          </Row>
          <Row id="links">
            {/* <a href="#" style={{ color: "white" }}>
              Privacy and Policy
            </a> */}
            <NavLink to="/return" exact style={{ color: "white" }}>Cancellation & Return Policy</NavLink>

          </Row>
          <Row id="links">
            {/* <a href="#" style={{ color: "white" }}>
              Terms of Service
            </a> */}
            <NavLink to="/FAQ" exact style={{ color: "white" }}>FAQ</NavLink>
          </Row>
          <Row id="links">
            {/* <a href="#" style={{ color: "white" }}>
              Terms of Service
            </a> */}
            <NavLink to="/howtowrite" exact style={{ color: "white" }}>How to write blog?</NavLink>
          </Row>
        </Col>
      {/* </Col> */}
      </div>
    )
}
export default RightMost;