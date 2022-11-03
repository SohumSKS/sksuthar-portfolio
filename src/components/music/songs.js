import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ProjectCards from "../Projects/ProjectCards";
import ReactDOM from "react-dom";
import YoutubeEmbedVideo from "youtube-embed-video";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from "react-player";
import eight from "../../new.ogg";
const song1 = './new.ogg';
function Music() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <div>
    </div>
        <h1 className="project-heading">
          <strong className="purple">Produced by Me </strong>
        </h1>

        
        <Row style={{ justifyContent: "center", paddingBottom: "300px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              //imgPath={chatify}
              isBlog={false} title="EIGHTH DAY"
              songLink = "https://raw.githubusercontent.com/sohumsuthar/VRC-2360-SIngularity-22-23/6206b9ac5a676c9398671041818d4d963c160329/new.mp3"
              description="A hip hop beat featuring synths sampled from Mike Dean' EIGHTH DAY PART ONE. Made in FL Studio."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              //imgPath={chatify}
              isBlog={false}
              title="Piano"
              songLink = "https://raw.githubusercontent.com/sohumsuthar/VRC-2360-SIngularity-22-23/6911b61645847a533936b501f229eb1a3d60be55/piano.mp3"

              description="A hip hop beat featuring piano and strings, sampled from Richard Claymore's Love Story. Made in FL Studio."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Music;
