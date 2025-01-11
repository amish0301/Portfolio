import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chrome_Extension from "../../Assets/Projects/App.png";
import BMI_CAL from "../../Assets/Projects/BMI_CAL.png";
import CHAT_APP from "../../Assets/Projects/chatApp-Demo.jpg";
import OA_APP from "../../Assets/Projects/OA_Platform.png";
import expense from "../../Assets/Projects/Expense-Tracker.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OA_APP}
              isBlog={false}
              title="YourPrepPartner"
              description="This platform allows users to take tests and track progress with detailed chart reports. Admins and faculty can create and assign tests, while users can view quantifiable scores for performance analysis. It supports Google OAuth and credentials-based login for seamless authentication. Technologies used: React, Express.js, MongoDB, Node.js, and Redis."
              ghLink="https://github.com/amish0301/OA-Platform"
              demoLink="https://oa-umber.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CHAT_APP}
              isBlog={false}
              title="Talk-A-Tive"
              description="A realtime chat application build with React.js, Node.js, Express.js, Socket.IO and JWT authentication. It features one to one and Groups chat which are totally authenticated. Users can send files, emojis and Live Location as well. They can create custom rooms for private chats."
              ghLink="https://github.com/amish0301/Chat-App"
              demoLink="https://chatfolio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMI_CAL}
              isBlog={false}
              title="BMI-Calculator"
              description="BMI Stands for Body Mass Index which quickly determines your Weight Status based on your Height and Weight. This is build with React.js and fully responsive in nature. Compatible with any devices"
              ghLink="https://github.com/amish0301/BMI-Calculator"
              demoLink="https://bmi-cal-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="A very simple and catchy Expense Tracker App. In which you can add your Profit and expenses at the same time. Basis on your profit-loss you can determine the Net Revenue. This is one page app and totally responsive in nature. Techstack used: React.js and Bootstrap."
              ghLink="https://github.com/amish0301/Expense-Tracker-App"
              demoLink="https://expense-tracker-app-amish.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chrome_Extension}
              isBlog={false}
              title="Chrome Extension - Alertify"
              description="A Customised Reminders for your well-being. where you can set personalized intervals for water breaks and screen-off periods and recieve timely notifications tailored to your schedule. This is a simple app and fully responsive in nature. Techstack used: React.js and Bootstrap."
              ghLink="https://github.com/amish0301/Chrome-Extension"
              demoLink="https://chromewebstore.google.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
         */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
