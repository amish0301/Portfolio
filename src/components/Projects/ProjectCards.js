import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        style={{ display: "block", overflow: "hidden", objectFit: "contain" }}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          height={"100%"}
        />
      </div>
      <Card.Body>
        <Card.Title style={{ marginBlock: ".5rem" }}>{props.title}</Card.Title>
        <Card.Text
          style={{ textAlign: "justify", textTransform: "capitalize", margin: '1rem 0' }}
        >
          {props.description}
        </Card.Text>
        <div
          className="button-container"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
