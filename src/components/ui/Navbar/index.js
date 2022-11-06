import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import React from "react";
import "../../screens/LoginScreen/styles.css";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";


export const NavbarViewTwo = (props) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <Navbar expand="lg">
      <Container className="navView">
        <Navbar.Brand href="#home">
          <img src='assets/MyJobs.png' className="brandImg"/>
        </Navbar.Brand>
        <NavDropdown title="R" id="basic-nav-dropdown" className="dropdownView">
          <NavDropdown.Item href="#action/3.1" >
            <button onClick={logOut} className="logoutBtn">
              Sign Out
            </button>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export const NavbarView = (props) => {
  return (
    <Navbar expand="lg">
      <Container className="navView">
        <Navbar.Brand href="#home">
        <img src='assets/MyJobs.png' className="brandImg"/>
        </Navbar.Brand>
        <Link to="/login">
          <button className="loginButton">Sign In</button>
        </Link>
      </Container>
    </Navbar>
  );
};
