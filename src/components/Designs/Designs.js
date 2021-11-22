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
import './Designs.css'

import FoodHome from '../../Assets/Design/Food/home.png'
import FoodExpert from '../../Assets/Design/Food/expert.png'
import FoodMenu from '../../Assets/Design/Food/menu.png'
import FoodTestimonials from '../../Assets/Design/Food/testimonials.png'

import StarbucksHome from '../../Assets/Design/Starbucks/home.png'

import kfc1 from '../../Assets/Design/KFC/Image 1-min.png'
import kfc2 from '../../Assets/Design/KFC/Image 2-min.png'
import kfc3 from '../../Assets/Design/KFC/Image 3-min.png'
import kfc4 from '../../Assets/Design/KFC/Image 4-min.png'

function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      
      <Container>
      <h1 className="project-heading">
          Responsive <strong className="purple">Website Designs </strong>
        </h1>
        <Row>
          <Col md={6}>
              <DesignCards name="Food" img1={FoodHome} img2={FoodExpert} img3={FoodMenu} img4={FoodTestimonials}
                github="https://github.com/killerkc12/Food" hosted="https://killerkc12.github.io/Food/"
              />
          </Col>
          <Col md={6}>
              <DesignCards name="Starbucks" img1={StarbucksHome}
                github="https://github.com/killerkc12/Starbucks" hosted="https://killerkc12.github.io/Starbucks/"
              />
          </Col>
          <Col md={6}>
            <DesignCards name="KFC" img1={kfc1} img2={kfc2} img3={kfc3} img4={kfc4}
                github="https://github.com/killerkc12/KFC" hosted="https://killerkc12.github.io/KFC/"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
