import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import logo from "../Footer/gillyLogo.png";
import { NavLink } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md" className="rounded-2xl">
        <NavLink to="/" className="hover:animate-bounce">
          <img src={logo} className="mx-auto w-14" alt="logo" />
        </NavLink>
        <h3 className="text-green-600 text-3xl font-sans font-medium relative mb-1 pl-1 tracking-wider ">
          GillyWeed
        </h3>

        <NavbarToggler className="ml-auto" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <p className="text-black hover:-translate-y-1  font-semibold hover:transition hover:ease-in-out">
                  Home
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" style={{ textDecoration: "none" }}>
                <p className="text-black hover:-translate-y-1  font-semibold hover:transition hover:ease-in-out">
                  Blog
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/shop" style={{ textDecoration: "none" }}>
                <p className="text-black hover:-translate-y-1  font-semibold hover:transition hover:ease-in-out">
                  Shop
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <p className="text-black hover:-translate-y-1  font-semibold hover:transition hover:ease-in-out">
                  About Us
                </p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                <p className="text-black hover:-translate-y-1  font-semibold hover:transition hover:ease-in-out">
                  Contact Us
                </p>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink to="/signin" style={{ textDecoration: "none" }}>
            <p className="rounded-full px-5  transition duration-150 ease-out  bg-slate-800 text-white font-semibold font-mono hover:bg-gradient-to-r hover:from-fuchsia-600  hover:to-blue-500 transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 duration-300">
              Sign In
            </p>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
