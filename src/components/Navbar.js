import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { CgMusic } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}

      fixed="top"
      expand="md"

      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav me-auto order-0 " defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <strong className="purple">sohum suthar </strong>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >

                projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/EDD"
                onClick={() => updateExpanded(false)}
              >
                EDD
              </Nav.Link>
            </Nav.Item>

        </Nav>
        </Navbar.Collapse>
        <Nav className="navbar-nav ms-auto order-0 " defaultActiveKey="#home">

            <ul className="home-about-social-links">

              <ul className="social-icons" >
                <a
                  href="https://github.com/sohumsuthar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                  <AiFillGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sohum-suthar-67728022b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </ul>
            </ul>
          </Nav>

      </Container>
    </Navbar>
  );
}

export default NavBar;
/*
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/music"
                onClick={() => updateExpanded(false)}
              >
                <CgMusic style={{ marginBottom: "2px" }} /> Music
              </Nav.Link>
            </Nav.Item>
        */