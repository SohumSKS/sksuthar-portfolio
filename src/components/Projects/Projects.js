import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import blog from "../../Assets/Projects/blog.png";
import ai from "../../Assets/Projects/AI.png";
import mars from "../../Assets/Projects/mars.png";
function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
        Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="2020 - AI Robot for Particle Accelerators"
              description="AI robot powered by an NVidia Jetson Nano equipped with high fidelity sensing to survey high radiation facilities."
              ghLink="https://github.com/sohumsuthar/tunnelrobot"
              demoLink="https://inspirehep.net/files/2caa5754c7df0c53bde506d9f3592abc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="2017 - Racing Quadcopter"
              description="A high fidelity quadcopter equipped with low latency hardware for racing, freestyle, and surveillance. Capable of speeds over 100mph"
              //ghLink=""
              demoLink="https://docs.google.com/document/d/1lh3AYdR2V4zIdTpO24tG1HMpoaHcadkZX031bctqgSs/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="2021 VEX EDR Robotics"
              description="Progammed in C++ using advanced math for high fidelity sensor programming."
              ghLink="https://github.com/sohumsuthar/VRC-2360-SIngularity-22-23"
              //demoLink="https://docs.google.com/document/d/1lh3AYdR2V4zIdTpO24tG1HMpoaHcadkZX031bctqgSs/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="2020 Acoustic Levitator"
              description="To determine the nature of movement of three beads of varying density within an acoustic field of varying frequency."
              //ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://docs.google.com/document/d/1gtclfe1hiWl5CQ3kAAX0jjfAxGkqkD-Wo3U_UuJk_FE/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="2018 Durability of Martian Soil Bricks"
              description="To determine whether a brick made from Earth soil and Mars soil (MMS1 and MMS2) will last longer and not crack while undergoing a test of durability."
              //ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://docs.google.com/document/d/1rqQ7vdI8uljrIvWcVBCMeWWbyqvirCT6SXBGin4oR90/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="2021 VEX AI Robotics"
              description="Utilized AI with the NVidia Jetson Nano paired with depth perception cameras, progammed in C++ using advanced math for high fidelity sensor programming."
              ghLink="https://github.com/sohumsuthar/91008A-VEX-AI"
              //demoLink="https://docs.google.com/document/d/1lh3AYdR2V4zIdTpO24tG1HMpoaHcadkZX031bctqgSs/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="YouTube"
              description="YouTube channel managed by me for technology education."
              //ghLink="https://github.com/sohumsuthar/91008A-VEX-AI"
              demoLink="https://www.youtube.com/c/NanoBeasts"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Portfolio"
              description="sohumsuthar.com! Programmed with node.js and react in VSCode"
              ghLink="https://github.com/sohumsuthar/portfolio"
              demoLink="https://www.sohumsuthar.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
