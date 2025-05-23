import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import myImg from "../../Assets/hat.webp";
import Contact from "./Contact";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++ and Javascript. </b>
              </i>
              <br />
              <br />I am a passionate{" "}
              <b className="purple">Software Developer</b> and{" "}
              <b className="purple">Full-Stack Developer</b> specializing in the{" "}
              <b className="purple">MERN Stack</b>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />I love building
              <b className="purple"> scalable web applications</b> and exploring
              technologies like <b className="purple">AWS</b> and{" "}
              <b className="purple">Docker</b> to create robust solutions.
              <br />
              <br />
              When I'm not coding, I enjoy brainstorming ideas, learning new
              tools, and connecting with the tech community to stay inspired.
              <br />
              <br />
              For more information you can checkout my <ImPointRight />{" "}
              <bold className="purple">
                {<Link to="/about">About</Link>}
              </bold>{" "}
              Section.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                loading="lazy"
                width={"300px"}
                height={"200px"}
                style={{ borderRadius: "50%" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        {/* subject query form */}
        <Contact />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amish0301"
                  target="_blank"
                  aria-label="github"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amish-pithva-62b83b233/"
                  target="_blank"
                  aria-label="linkedin"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/strivea_76/"
                  target="_blank"
                  aria-label="instagram"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
