
import React, { useState, useEffect } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import logo from '../footer/gillyLogo.png'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './header.css';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`} >
      <Navbar light expand="md" className="rounded-2xl" >
      <NavbarBrand href="/" className="hover:animate-bounce"  ><img src={logo} className="mx-auto w-14" alt="logo" /></NavbarBrand>
        <NavbarToggler className="ml-auto" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem  >
                <NavLink href="/" className="text-black hover:-translate-y-1 hover:transition-shadow font-semibold hover:transition hover:ease-in-out" >Home</NavLink>
              </NavItem>
              <NavItem  >
                <NavLink href="/blog" className="text-black hover:-translate-y-1 hover:transition-shadow font-semibold hover:transition hover:ease-in-out" >Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop" className="text-black hover:hover:-translate-y-1 hover:transition-shadow font-semibold hover:transition hover:ease-in-out" >Shops</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" className="text-black hover:hover:-translate-y-1 hover:transition-shadow font-semibold hover:transition hover:ease-in-out" >About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" className="text-black hover:hover:-translate-y-1 hover:transition-shadow font-semibold hover:transition hover:ease-in-out" >ContactUs</NavLink>
              </NavItem>
            </Nav>
            <ButtonToolbar className="rounded-full px-5  transition duration-150 ease-out  bg-slate-800 text-white font-semibold font-mono hover:bg-gradient-to-r hover:from-fuchsia-600  hover:to-blue-500 transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 duration-300"> Sign In </ButtonToolbar>
          </Collapse>
      
      </Navbar>
    </div>
  );
}

export default Header;