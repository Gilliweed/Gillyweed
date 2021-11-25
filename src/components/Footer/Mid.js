import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Mid = () => {
    return (
        <>
            <Col className="mid" fluid>
                <h3 className="gilly ">Links</h3>
                <Col className="para">
                    <Row id="links">
                        <NavLink to="/" exact style={{ color: "black" }}>Home</NavLink>
                    </Row>
                    <Row id="links">
                        <NavLink to="/blog" exact style={{ color: "black" }}>Blog</NavLink>
                    </Row>
                    <Row id="links">
                        {/* <a href="" style={{ color: "black" }}>
                  Shop
                </a> */}
                        <NavLink to="/shop" exact style={{ color: "black" }}>Shop</NavLink>
                    </Row>
                    <Row id="links">
                        <a href="" style={{ color: "black" }}>
                            Write a blog
                        </a>
                    </Row>
                </Col>
            </Col>

        </>
    )
}
export default Mid;