import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { DiCss3, DiHtml5, DiJava, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiBootstrap, SiMongodb, SiMysql, SiPhp, SiPostgresql, SiSocketdotio } from "react-icons/si";
import { Icon } from '@iconify/react';
import hibernateIcon from '@iconify-icons/simple-icons/hibernate';
import expressIcon from '@iconify-icons/simple-icons/express';

import oas from '../../Assets/projects/online admission system.png'
import wma from '../../Assets/projects/web meeting appliction.png'
import DesignCards from "./DesignCards";

import FoodHome from '../../Assets/Design/Food/home.png'
import FoodExpert from '../../Assets/Design/Food/expert.png'
import FoodMenu from '../../Assets/Design/Food/menu.png'
import FoodTestimonials from '../../Assets/Design/Food/testimonials.png'

import StarbucksHome from '../../Assets/Design/Starbucks/home.png'

function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      
      <Container>
      <h1 className="project-heading">
          Responsive <strong className="purple">Website Designs </strong>
        </h1>
        <Row>
          <Col>
              <DesignCards name="Food" img1={FoodHome} img2={FoodExpert} img3={FoodMenu} img4={FoodTestimonials}
                github="https://github.com/killerkc12/Food" hosted="https://killerkc12.github.io/Food/"
              />
          </Col>
          <Col>
              <DesignCards name="Starbucks" img1={StarbucksHome}
                github="https://github.com/killerkc12/Starbucks" hosted="https://killerkc12.github.io/Starbucks/"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
