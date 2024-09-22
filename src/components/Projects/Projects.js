import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BMI_CAL from "../../Assets/Projects/BMI_CAL.png";
import CHAT_APP from "../../Assets/Projects/chatApp-Demo.jpg";
import expense from "../../Assets/Projects/Expense-Tracker.png";
import Chrome_Extension from "../../Assets/Projects/App.png";

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
              imgPath={CHAT_APP}
              isBlog={false}
              title="Talk-A-Tive"
              description="A realtime chat application build with React.js, Node.js, Express.js, Socket.IO and JWT authentication. It features one to one and Groups chat which are totally authenticated. Only registered Users can send images and emojis. Users can also create private chat rooms with other users. The project is fully responsive. The backend is hosted on Render and the frontend is deployed on Vercel platform. For Faster development MuI is used."
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
