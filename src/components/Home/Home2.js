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


import HomeCards from "./HomeCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import blog from "../../Assets/Projects/blog.png";
import ai from "../../Assets/Projects/AI.png";
import mars from "../../Assets/Projects/mars.png";
const ColoredLine = ({ color }) => (
  <hr className="center"
    style={{

      color: color,

      backgroundColor: color,
      height: 1.5,
      opacity: 1,
      width: 600

    }}
  />
);
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">

      <Container className="mokey">
        <ColoredLine color="white" />

      </Container>
      <Container>
      <Row style={{ justifyContent: "left" }}>
        <Col md={50} >
          <h1 className="project-heading4 " style={{justifyContent: "left", alignContent: "left", paddingBottom: "0"}}>
            Catch up: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
          </h1>
        </Col>
        </Row>
        </Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={8} className="home-about-description3 mokey" style={{ maxWidth: "90%"}} >


          <Col className="home-card" >
            <HomeCards

              isBlog={false}
              title="VEX EDR Robotics"
              date="2021"
              description="Progammed in C++ using advanced math for high fidelity sensor programming."
              ghLink="https://github.com/sohumsuthar/VRC-2360-SIngularity-22-23"
            //demoLink="https://docs.google.com/document/d/1lh3AYdR2V4zIdTpO24tG1HMpoaHcadkZX031bctqgSs/edit?usp=sharing"
            />
          </Col>
          <Col className="home-card">
            <HomeCards

              isBlog={false}
              title="AI Robot for Particle Accelerators"
              date="2020"
              description="AI robot powered by an NVidia Jetson Nano equipped with high fidelity sensing to survey high radiation facilities."
              ghLink="https://github.com/sohumsuthar/tunnelrobot"
              demoLink="https://inspirehep.net/files/2caa5754c7df0c53bde506d9f3592abc"
            />
          </Col></Col>
          </Row>

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
