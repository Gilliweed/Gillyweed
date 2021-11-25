import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Right = () =>{
    return(
        <Col className="right" fluid>
        <h3 className="gilly ">Company</h3>
        <Col className="para">
          <Row id="links" >
            
            <NavLink to="/about" exact style={{ color: "black" }}>About Us</NavLink>
          </Row>
          <Row id="links">
           
            <NavLink to="/contact" exact style={{ color: "black" }}>Contact Us</NavLink>
          </Row>
          <Row id="links">
            <a href="" style={{ color: "black" }}>
              Privacy and Policy
            </a>
          </Row>
          <Row id="links">
            <a href="" style={{ color: "black" }}>
              Terms of Service
            </a>
          </Row>
        </Col>
      </Col>
    )
}
export default Right;