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


            <Col className="home-about-description">
              <p className="home-about-body">
                <img
                  src={myImg}
                  alt="home pic"
                  className="blog-img"

                  style={{ float: "left", maxHeight: "35vh", borderRadius: 25, maxWidth: "35vw", textalign: "right" }}
                />
                <h1 className="project-heading6">
                  Sohum Suthar
                </h1>
                Hey! I am a Senior at Neuqua Valley High School.
                <br />

                <br /> I have a passion for 
                
                  <b href = {"https://www.sohumsuthar.com/"} className="purple"> Electrical Engineering, Physics, and Robotics. </b>
                
                <br />
                <br />
                Check out some of my&nbsp;
             
                  <b className="purple">projects </b> and my {}
                  <b className="purple">
                    github.
                  </b>
      
                <br />
                <br />
                Feel free to email me at: <b className="purple"> sohumksuthar@gmail.com </b>
                or connect with me on
            
                  <b className="purple">
                    {" "}
                  </b>
           
    
            
                  <b className="purple">LinkedIn</b>
           
              </p>


            </Col>



          </Row>

        </Container>
      </Container>

      <Home2 />
    </section>

  );
}

export default Home;

