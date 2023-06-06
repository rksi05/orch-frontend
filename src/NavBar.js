import React from "react";
import { NavBar, Nav, NavLink, NavMenu } from "./NavbarElements";

// my nav bar, see app.js for source

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Instruments" activeStyle>
            Instrument Data
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;