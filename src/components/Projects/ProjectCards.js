import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ReactPlayer from "react-player";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath &&( <Card.Img variant="top" src={props.imgPath} />)}
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }} >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.songLink && (
          <ReactPlayer
            url={props.songLink}
            width="350px"
            height="50px"
            playing={false}
            controls={true}
          />
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Link"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
