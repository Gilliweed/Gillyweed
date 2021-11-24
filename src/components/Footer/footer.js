import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Col sm={5} className="left" fluid>
            <h1 className="gilly ">Gillyweedlogo </h1>
            <p className="para">
              for recycled products to save the environment{" "}
            </p>
            <Row className="para">
              <Col>
                <a href="" style={{ color: "black" }}>
                  <img src="" href="" alt="fb" />{" "}
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "black" }}>
                  <img src="" href="" alt="Insta" />{" "}
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "black" }}>
                  <img src="" href=" " alt="Twitt" />
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "black" }}>
                  <img src="" href="" alt="Tele" />
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "black" }}>
                  {" "}
                  <img src="" href="" alt="Link" />{" "}
                </a>
              </Col>
              <Col>
                <a href="" style={{ color: "black" }}>
                  <img src="" href="" alt="Utube" />{" "}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mid" fluid>
            <h3 className="gilly ">Links</h3>
            <Row className="para">
              <a href="" style={{ color: "black" }}>
                Blog
              </a>
              <a href="" style={{ color: "black" }}>
                Shop
              </a>
              <a href="" style={{ color: "black" }}>
                Write a blog
              </a>
            </Row>
          </Col>
          <Col className="right" fluid>
            <h3 className="gilly ">Company</h3>
            <Row className="para">
              <a href="" style={{ color: "black" }}>
                About Us
              </a>
            </Row>
            <Row className="para">
              <a href="" style={{ color: "black" }}>
                Contact Us
              </a>
            </Row>
            <Row className="para">
              <a href="" style={{ color: "black" }}>
                Privacy and Policy
              </a>
            </Row>
            <Row className="para">
              <a href="" style={{ color: "black" }}>
                Terms of Service
              </a>
            </Row>
          </Col>
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
