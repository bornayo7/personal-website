import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
  SiIpfs,
  SiLinux,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

function Toolstack() {
  return (
    <Row className="tech-row">
      <Col xs={4} md={3} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiIpfs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <RiRobot2Line />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
