import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";
const ColoredLine = ({ color }) => (
  <hr
    style={{

      color: color,

      backgroundColor: color,
      height: 1.5,
      opacity: 1,
      width: 600

    }}
  />
);
function Home() {
  return (
    <section>
      <br />
      <br />
      <br />

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>


            <Col md={6} className="home-about-description">
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
                  <b className="purple">Electrical Engineering </b> and the
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


            <Col md={5} className = "home-about-description2" >
              <img
                src={myImg}
                alt="home pic"
                className="blog-img"

                style={{ maxHeight: "400px", borderRadius: 40, maxWidth: "400px", textalign: "left" }}
              />
            </Col>

          </Row>

        </Container>
      </Container>

      <Home2 />
    </section>

  );
}

export default Home;

