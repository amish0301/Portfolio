import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          maxHeight: "50%",
          width: "100%",
          objectFit: "contain",
          overflow: "hidden",
        }}
      />
      <Card.Body
        style={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Card.Title style={{ marginBlock: ".5rem" }}>{props.title}</Card.Title>
        <Card.Text
          style={{ textAlign: "justify", textTransform: "capitalize" }}
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
