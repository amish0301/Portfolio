import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amish Pithva </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I'm currently Learning MERN Stack Framework.
            <br />
            I'm in <span className="purple">3rd</span> Year and pursuing my B.tech Degree in IT branch from Ahmedabad Institute of Technology <strong>(AIT)</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> In Sports - Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amish Pithva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
