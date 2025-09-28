import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", wordSpacing: "2px" }}>
            Hi Everyone, I’m <span className="purple">Amish Pithva</span> from
            <span className="purple"> Gujarat, India</span>.
            <br />
            <br />
            I'm a{" "}
            <span className="purple">
              Software Engineer & Full Stack Developer
            </span>
            {" "}passionate about crafting scalable, high-performance web
            applications and delivering meaningful digital experiences.
            <br />
            <br />I hold a B.Tech degree in{" "}
            <span className="purple">Information Technology</span>
            {" "}from <strong>Ahmedabad Institute of Technology (AIT)</strong>.
            <br />
            <br />
            Beyond coding, I enjoy exploring activities that keep me inspired
            and balanced:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading & Continuous Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports – Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring Cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming for Fun & Strategy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px" }}>
            "Strive to build solutions that create impact and add value!"{" "}
          </p>
          <footer className="blockquote-footer">Amish Pithva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
