import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", wordSpacing: "2px" }}>
            Hi Everyone, I am <span className="purple">Amish Pithva </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />
            I'm a <span className="purple">Full Stack Developer (in MERN) </span> skilled in Building robust and scalable web applications.
            <br />
            <br />
            I'm in <span className="purple">4th</span> Year and pursuing B.tech Degree in IT branch from Ahmedabad Institute of Technology <strong>(AIT)</strong>
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

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amish Pithva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
