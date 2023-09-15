import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mypic from '../../Assets/kiran1111.png'
import Particle from "../Particle";
import Home2 from "./Home2";
import SocialMediaIcons from "../SocialMedia/SocialMediaIcons";

function Home() {

  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Kiran N Chavan</strong>
              </h1>
              <SocialMediaIcons/>
            </Col>
            <Col md={5} style={{ paddingBottom: 10, borderRadius:"50%", boxShadow:"0px 5px 4px 1px #ccc"}}>
              <img src={mypic} alt="home pic" className="img-fluid" style={{borderRadius:"50%", background:"white"}} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
