import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";
import Mid from "./Mid";
const Footer = () => {
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Left/>
          <Mid/>
          <Right/>
        </Row>
        <Row style={{ paddingTop: "50px" }}>
          <Col style={{ marginBottom: "-18px" }}>
            <p style={{ marginBottom: "-130px" }}>
              <img src="" alt="globe"></img>
              India(English)
            </p>
          </Col>
          <Col>
            <p style={{ textAlign: "start" }}>
              {" "}
              &copy; All rights are reserved{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
