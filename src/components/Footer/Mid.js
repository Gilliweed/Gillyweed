import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Mid = () => {
    return (
        <>
           
                
                <Col className="para">
                <h4 className="gilly">Links</h4>
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
                        <a href="/#" style={{ color: "black" }}>
                            Write a blog
                        </a>
                    </Row>
                </Col>
           

        </>
    )
}
export default Mid;