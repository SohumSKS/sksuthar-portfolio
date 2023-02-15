import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ReactPlayer from "react-player";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (<Card.Img variant="top" src={props.imgPath} />)}
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }} >{props.title}         
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
           // style={{ justifyContent: "left" }}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {""}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : ""}
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
export default ProjectCards;
