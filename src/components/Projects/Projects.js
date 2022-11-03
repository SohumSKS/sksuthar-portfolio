import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Robot for Particle Accelerators"
              description="AI robot powered by an NVidia Jetson Nano equipped with high fidelity sensing to survey high radiation facilities."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://inspirehep.net/files/2caa5754c7df0c53bde506d9f3592abc"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
