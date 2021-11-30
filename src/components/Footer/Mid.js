import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Mid = () => {
    return (
        <>
            {/* <Col className="mid" fluid> */}
                <h4 className="gilly ">Links</h4>
                <Col className="para">
                    <Row id="links">
                        <NavLink to="/" exact style={{ color: "white" }}>Home</NavLink>
                    </Row>
                    <Row id="links">
                        <NavLink to="/blog" exact style={{ color: "white" }}>Blog</NavLink>
                    </Row>
                    <Row id="links">
                        {/* <a href="" style={{ color: "black" }}>
                  Shop
                </a> */}
                        <NavLink to="/shop" exact style={{ color: "white" }}>Shop</NavLink>
                    </Row>
                    <Row id="links">
                        <a href="#" style={{ color: "white" }}>
                            Write a blog
                        </a>
                    </Row>
                </Col>
            {/* </Col> */}

        </>
    )
}
export default Mid;