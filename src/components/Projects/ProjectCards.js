import React from "react";
import { Row, Col } from "react-bootstrap";


import {BsGithub} from 'react-icons/bs'
import { IoMdRocket } from 'react-icons/io'

function ProjectCards(props) {
  
  const tech1 = props.tech1
  const tech2 = props.tech2
  const tech3 = props.tech3
  const tech4 = props.tech4
  const tech5 = props.tech5

  return (
    <div className="project-card-view">
      {
        props.imgPath ?
        <img  src={props.imgPath} alt="card-img" width="300" height=""/>
        : ""
      }
      <div className="project__body">
        <h5 style={{padding: "10px"}}>{props.title}</h5>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {
            tech1 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech1 
                }
              </Col>
                ) : ""
          }
          {
            tech2 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech2 
                }
              </Col>
                ) : ""
          }
          {
            tech3 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech3 
                }
              </Col>
                ) : ""
          }
          {
            tech4 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech4 
                }
              </Col>
                ) : ""
          }
          {
            tech5 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech5
                }
              </Col>
                ) : ""
          }
        </Row>
        <Row className="design__bottom" style={{paddingBottom: "10px"}}>
                <Col>
                    <a href={props.link} target="blank">
                        <button>
                            <BsGithub/>   Github
                        </button>
                    </a>
                </Col>
                {
                  props.isHosted ?
                  (
                    <Col>
                    <a href={props.isHosted} target="blank">
                        <button>
                            <IoMdRocket/>   Hosted
                        </button>
                    </a>
                </Col>
                  ) : ""
                }
            </Row>
      </div>
    </div>
  );
}
export default ProjectCards;

