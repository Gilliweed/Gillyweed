
import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Left = () => {
    return (
        <>

            
                <Col sm={6} className="left" fluid>
                    <h1 className="gilly ">Gillyweedlogo </h1>
                    <p className="para">
                        for recycled products to save the environment{" "}
                    </p>
                    <Row className="para">
                        <Col>
                            <NavLink to="/shop" exact style={{ color: "black" }}>
                                <img src="" alt="fb" />{" "}
                            </NavLink>
                            {/* <a href=""></a> */}
                        </Col>
                        <Col>
                            <a href="" style={{ color: "black" }}>
                                <img src="" alt="Insta" />{" "}
                            </a>
                        </Col>
                        <Col>
                            <a href="" style={{ color: "black" }}>
                                <img src="" alt="Twitt" />
                            </a>
                        </Col>
                        <Col>
                            <a href="" style={{ color: "black" }}>
                                <img src="" alt="Tele" />
                            </a>
                        </Col>
                        <Col>
                            <a href="" style={{ color: "black" }}>
                                {" "}
                                <img src="" alt="Link" />{" "}
                            </a>
                        </Col>
                        <Col>
                            <a href="" style={{ color: "black" }}>
                                <img src="" alt="Utube" />{" "}
                            </a>
                        </Col>
                    </Row>
                </Col>
          

        </>
    );
};
export default Left;
