import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const RightMost = () => {
  return (
    <div >
      
      <Col className="para" >
      <h4 className="gilly">Help</h4>
        <Row id="links">
          <NavLink to="/payments" exact style={{ color: "black" }}>Payments</NavLink>
        </Row>
        <Row id="links">

          <NavLink to="/shipping" exact style={{ color: "black" }}>Shipping</NavLink>
        </Row>
        <Row id="links">
          {/* <a href="#" style={{ color: "white" }}>
              Privacy and Policy
            </a> */}
          <NavLink to="/return" exact style={{ color: "black" }}>Cancellation & Return Policy</NavLink>

        </Row>
        <Row id="links">
          {/* <a href="#" style={{ color: "white" }}>
              Terms of Service
            </a> */}
          <NavLink to="/FAQ" exact style={{ color: "black" }}>FAQ</NavLink>
        </Row>
        <Row id="links">
          {/* <a href="#" style={{ color: "white" }}>
              Terms of Service
            </a> */}
          <NavLink to="/howtowrite" exact style={{ color: "black" }}>How to write blog?</NavLink>
        </Row>
      </Col>
      {/* </Col> */}
    </div>
  )
}
export default RightMost;