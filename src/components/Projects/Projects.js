import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiBootstrap, SiMongodb, SiMysql, SiPhp, SiSocketdotio } from "react-icons/si";
import { Icon } from '@iconify/react';
import expressIcon from '@iconify-icons/simple-icons/express';

import oas from '../../Assets/projects/online admission system.png'
import wma from '../../Assets/projects/web meeting appliction.png'
import instaClone from '../../Assets/projects/insta-clone.png'

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
              isHosted= "https://web-meeting-application.herokuapp.com/"
              imgPath = {wma}
              title="Web Meeting Application"
              tech1 = {<DiReact/>}
              tech2 = {<DiNodejsSmall/>}
              tech3 = {<SiSocketdotio/>}
              description="
              •Establish the realtime meeting for two or more peoples.
              •Features are Audio and Video Control, Realtime Chat between all people in the room.
              •Screen Sharing, List of peoples in the room.
              •User can apply for more than one courses and manage their details"
              link="https://github.com/killerkc12/Web-Meeting-Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isHosted={false}
              imgPath = {oas}
              title="Online Admission System"
              tech1 = {<SiPhp/>}
              tech2 = {<SiMysql/>}
              tech3 = {<DiHtml5/>}
              tech4 = {<DiCss3/>}
              tech5 = {<SiBootstrap/>}
              description="Admin will manage all industry courses and users.
              ▪ User can apply for more than one courses and manage their details"
              link="https://github.com/killerkc12/Online-Admission-System-PHP-MYSQL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaClone}
              isHosted="https://insta-clone-mern-app.herokuapp.com"
              title="Instagram Clone Web App"
              tech1 = {<DiReact/>}
              tech2 = {<DiNodejsSmall/>}
              tech3 = {<Icon icon={expressIcon} />}
              tech4 = {<SiMongodb/>}
              description="Simple Instagram Clone where users register, log in manage their profile and make the posts."
              link="https://github.com/killerkc12/insta-clone-MERN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
