import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      <Card.Body style={{ textAlign: "left" }}> 
        <Card.Title>      
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primaree"
            href={props.demoLink}
            target="_blank"
            style={{ textAlign: "left" }}
          >
                <BsLink45Deg size={25.5} />
              {props.title}
          
          
          </Button>
        )}</Card.Title>

        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
