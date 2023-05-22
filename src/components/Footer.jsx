import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../images/rr.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src={logo} alt="imagee" />
              <span className="NavBar_name">VigourMe</span>
            </div>
            <div className="footer-text">
              We will always give our customers the best in order to get the
              best experience.
            </div>
          </div>
          <div className="col-md-4">
            <Navbar expand="md" className="footer-menu">
              <Navbar.Toggle aria-controls="footer-navbar" />
              <Navbar.Collapse id="footer-navbar">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="col-md-4">
            <div className="footer-contact">
              <div>
                <FaPhone className="footer-icon" />
                <span>123-456-7890</span>
              </div>
              <div>
                <FaEnvelope className="footer-icon" />
                <span>info@example.com</span>
              </div>
              <div className="footer-social-icons">
                <FaFacebook className="footer-icon" />
                <FaTwitter className="footer-icon" />
                <FaInstagram className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
