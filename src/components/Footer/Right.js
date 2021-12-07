import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Right = () =>{
    return(
      <>
        {/* // <Col className="right" fluid> */}
        <h4 className="gilly ">Company</h4>
        <Col className="para" >
          <Row id="links">
            <NavLink to="/about" exact style={{ color: "white" }}>About Us</NavLink>
          </Row>
          <Row id="links">
           
            <NavLink to="/contact" exact style={{ color: "white" }}>Contact Us</NavLink>
          </Row>
          <Row id="links">
            <a href="#" style={{ color: "white" }}>
              Privacy and Policy
            </a>
          </Row>
          <Row id="links">
            <a href="#" style={{ color: "white" }}>
              Terms of Service
            </a>
          </Row>
        </Col>
      {/* // </Col> */}
      </>
    )
}
export default Right;