import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";

function Footer() {


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by Kiran N Chavan</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3><MdEmail/>  kiranchavankc12@gmail.com</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
