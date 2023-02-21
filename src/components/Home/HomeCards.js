import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import ReactPlayer from "react-player";
function HomeCards(props) {
  return (
    <Card className="home-card-view">
      {props.imgPath && (<Card.Img variant="top" src={props.imgPath} />)}
      <Card.Body>
      <Card.Text style={{ textAlign: "left", opacity: "0.6", paddingbottom: "0", height:"10px" }}>
          {props.date}
        </Card.Text>
        <Card.Title style={{ textAlign: "left" }} >{props.title}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              // style={{ justifyContent: "left" }}
              style={{ marginLeft: "10px" }}
            >
              <BsLink45Deg size={25} />
            </Button>
          )}
          {"\n"}
          {"\n"}
          {!props.isBlog && props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <AiOutlineGithub size={22.5} />
            </Button>
          )}</Card.Title>

        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {props.songLink && (
          <ReactPlayer
            url={props.songLink}
            style={{ justifyContent: "left" }}
            width="300px"
            height="50px"
            playing={false}
            controls={true}
          />
        )}

      </Card.Body>
    </Card>
  );
}
export default HomeCards;
