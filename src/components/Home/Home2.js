import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={20} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Engineer and Scientist
              <br />
              <br /> Fluencies: 
              <i>
                <b className="purple"> C++, Javascript, Python, Java, C, and more. </b>
              </i>
              <br />
              <br />
              My field of Interest's are:&nbsp;
              <i>
                <b className="purple">Electrical Engieering </b> and 
                integration of {" "}
                <b className="purple">
                  AI and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I am a Board director on <b className="purple">mySTEMBuddy</b> and a 
              <i>
                <b className="purple">
                  {" "}
                  Senior
                </b>
              </i>
              &nbsp; at
              <i>
                <b className="purple"> Neuqua Valley High School</b>
              </i>
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sohumsuthar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sohum-suthar-67728022b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/sohumsuthar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
/*
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
      */

export default Home2;
