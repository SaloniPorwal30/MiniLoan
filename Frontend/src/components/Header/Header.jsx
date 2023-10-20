import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <section className="navbar_wrapper">
        <Navbar expand="lg" className="navbar_header" >
          <Container>
            <Navbar.Collapse className="navmenu">
              <Nav>
                <NavLink className="nav_menu">
                  <Link to="/"
                  > MINI-LOAN
                  </Link>
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/create"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Create Loan
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/details"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Loan Details
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/count"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Loan Count
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/repay"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Repay Loan
                </NavLink>
                <NavLink
                  className="nav_menu"
                  to="/login"
                  style={({ isActive }) => ({
                    color: isActive ? "#f27e4c" : "#333333",
                  })}
                >
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section >
    </>
  );
};

export default Header;
