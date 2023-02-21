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

      fixed="top"

      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="nopadding">

      
          <Nav className="navbar-nav  " defaultActiveKey="#home">
            <Nav.Item className="nav-linkprops2">
              <Nav.Link as={Link} to="/">
              <h1 className="nav-linkprops"><strong className="purple">sohum suthar </strong></h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project">

<h1 className="nav-linkprops">projects</h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
              >
                <h1 className="nav-linkprops">resume</h1>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/EDD"
              >
                <h1 className="nav-linkprops">EDD</h1>
              </Nav.Link>
            </Nav.Item>

        </Nav>
        <Nav className="navbar-nav  " defaultActiveKey="#home">

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
                  <FaLinkedinIn size={18} />
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